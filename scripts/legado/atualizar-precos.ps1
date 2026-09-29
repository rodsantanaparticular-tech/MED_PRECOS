<#
.SYNOPSIS
    Orquestra a atualizacao periodica dos precos reais por rede de farmacia do MED_PRECOS.

.DESCRIPTION
    Roda, em sequencia, os 3 passos da raspagem que antes eram manuais (ver STATUS.md):
      1. scripts/scrape_precos_vtex.py    -> scripts/precos_vtex.json   (5 redes VTEX)
      2. scripts/scrape_precos_panvel.js  -> scripts/precos_panvel.json (Panvel, via Playwright)
      3. scripts/build_precos_redes.js    -> js/precos-redes.js          (casa tudo)

    Cada passo e registrado com timestamp em scripts/logs/atualizacao-<data>.log.
    O passo 3 so roda se pelo menos um dos dois passos de raspagem produziu arquivo.
    Uma falha na raspagem VTEX ou Panvel NAO aborta o processo (a outra fonte + o
    build ainda valem); so o build falhando e considerado erro fatal.

.PARAMETER Rapido
    Passa um limite pequeno de termos para os scrapers (teste rapido, ~1-2 min em vez de ~40).

.PARAMETER Limite
    Numero de termos de busca a usar (default: todos). Implicito 40 quando -Rapido.

.PARAMETER PularVtex
    Pula o passo 1 (reaproveita scripts/precos_vtex.json existente).

.PARAMETER PularPanvel
    Pula o passo 2 (reaproveita scripts/precos_panvel.json existente).

.EXAMPLE
    ./scripts/atualizar-precos.ps1
    Atualizacao completa (catalogo inteiro).

.EXAMPLE
    ./scripts/atualizar-precos.ps1 -Rapido
    Rodada de teste com poucos termos.

.NOTES
    Requer: python (openpyxl), node, e Playwright instalado globalmente (npm i -g playwright).
    Agendamento mensal no Windows -- JA CRIADO em 2026-09-29 (tarefa "MED_PRECOS - atualizar precos",
    dia 1 as 03:00, roda assim que possivel se o PC estava desligado, roda na bateria, limite 4h).
    Para recriar (PowerShell):
      schtasks /create /tn "MED_PRECOS - atualizar precos" /sc monthly /d 1 /st 03:00 /f `
        /tr "powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$env:USERPROFILE\OneDrive\Documentos\MED_PRECOS\scripts\atualizar-precos.ps1`""
      Set-ScheduledTask -TaskName "MED_PRECOS - atualizar precos" -Settings (New-ScheduledTaskSettingsSet `
        -StartWhenAvailable -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries `
        -ExecutionTimeLimit (New-TimeSpan -Hours 4) -MultipleInstances IgnoreNew)
    Ver/rodar agora: Get-ScheduledTaskInfo / Start-ScheduledTask -TaskName "MED_PRECOS - atualizar precos"
#>
[CmdletBinding()]
param(
    [switch]$Rapido,
    [int]$Limite = 0,
    [switch]$PularVtex,
    [switch]$PularPanvel
)

$ErrorActionPreference = 'Stop'
$raiz     = Split-Path -Parent $PSScriptRoot
$scripts  = $PSScriptRoot
$logDir   = Join-Path $scripts 'logs'
$logFile  = Join-Path $logDir ("atualizacao-{0}.log" -f (Get-Date -Format 'yyyy-MM-dd'))
$saidaJs  = Join-Path $raiz 'js/precos-redes.js'
$jsonVtex = Join-Path $scripts 'precos_vtex.json'
$jsonPanvel = Join-Path $scripts 'precos_panvel.json'

if (-not (Test-Path $logDir)) { New-Item -ItemType Directory -Path $logDir | Out-Null }

function Log {
    param([string]$msg, [string]$nivel = 'INFO')
    $linha = "{0} [{1}] {2}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $nivel, $msg
    Write-Host $linha
    Add-Content -Path $logFile -Value $linha -Encoding utf8
}

function Invoke-Passo {
    param([string]$nome, [scriptblock]$acao, [switch]$Fatal)
    Log "==> INICIO: $nome"
    $cronometro = [System.Diagnostics.Stopwatch]::StartNew()
    try {
        & $acao
        if ($LASTEXITCODE -ne $null -and $LASTEXITCODE -ne 0) {
            throw "codigo de saida $LASTEXITCODE"
        }
        $cronometro.Stop()
        Log ("<== OK: {0} ({1:n1} min)" -f $nome, $cronometro.Elapsed.TotalMinutes)
        return $true
    } catch {
        $cronometro.Stop()
        Log ("<== FALHA: {0} ({1:n1} min) -- {2}" -f $nome, $cronometro.Elapsed.TotalMinutes, $_) 'ERRO'
        if ($Fatal) { throw }
        return $false
    }
}

# --- Pre-condicoes ------------------------------------------------------------
$nodeModulesGlobal = (& npm root -g 2>$null)
if ($nodeModulesGlobal) { $env:NODE_PATH = $nodeModulesGlobal }

$argsLimite = @()
$limiteEfetivo = if ($Rapido -and $Limite -le 0) { 40 } else { $Limite }
if ($limiteEfetivo -gt 0) { $argsLimite = @($limiteEfetivo) }

Log "===================================================================="
Log ("Atualizacao de precos MED_PRECOS  (raiz: {0})" -f $raiz)
Log ("Modo: {0} | limite de termos: {1}" -f ($(if ($Rapido) {'RAPIDO'} else {'completo'})), ($(if ($limiteEfetivo -gt 0) {$limiteEfetivo} else {'todos'})))
$hashAntes = if (Test-Path $saidaJs) { (Get-FileHash $saidaJs -Algorithm SHA256).Hash } else { $null }

Push-Location $raiz
try {
    # --- Passo 1: VTEX (5 redes) --------------------------------------------
    if ($PularVtex) {
        Log "Passo 1 (VTEX) pulado por -PularVtex"
    } else {
        Invoke-Passo "raspagem VTEX (5 redes)" {
            $a = @('scripts/scrape_precos_vtex.py')
            if ($limiteEfetivo -gt 0) { $a += @('--limite', $limiteEfetivo) }
            & python @a
        } | Out-Null
    }

    # --- Passo 2: Panvel ---------------------------------------------------
    if ($PularPanvel) {
        Log "Passo 2 (Panvel) pulado por -PularPanvel"
    } else {
        Invoke-Passo "raspagem Panvel (Playwright)" {
            & node 'scripts/scrape_precos_panvel.js' @argsLimite
        } | Out-Null
    }

    # --- Passo 3: build (fatal se falhar) --------------------------------
    if (-not (Test-Path $jsonVtex) -and -not (Test-Path $jsonPanvel)) {
        throw "Nenhuma fonte de precos disponivel (precos_vtex.json e precos_panvel.json ausentes) -- nao da pra buildar."
    }
    Invoke-Passo "build js/precos-redes.js" {
        & node 'scripts/build_precos_redes.js'
    } -Fatal | Out-Null

    # --- Resumo ----------------------------------------------------------
    $hashDepois = (Get-FileHash $saidaJs -Algorithm SHA256).Hash
    if ($hashAntes -eq $hashDepois) {
        Log "js/precos-redes.js NAO mudou nesta rodada."
    } else {
        # O arquivo tem dois blocos (PRECOS_REDES e depois PBM_MEDICAMENTOS) - conta cada um separado
        $conteudo = Get-Content $saidaJs -Raw -Encoding utf8
        $partes = $conteudo -split 'const PBM_MEDICAMENTOS'
        $qtd = ([regex]::Matches($partes[0], '"med-\d+":')).Count
        $qtdPbm = if ($partes.Count -gt 1) { ([regex]::Matches($partes[1], '"med-\d+":')).Count } else { 0 }
        Log ("js/precos-redes.js atualizado. Medicamentos com preco real: {0} | com desconto de laboratorio (PBM): {1}" -f $qtd, $qtdPbm)
        Log "Lembrete: revisar o diff e commitar js/precos-redes.js."
    }
    Log "CONCLUIDO."
} finally {
    Pop-Location
}
