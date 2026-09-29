"""
Linha de comando do backend (usada pelo docker-compose e à mão):

    python -m app.cli migrar                     # alembic upgrade head
    python -m app.cli carga-inicial              # redes + CMED do mês + preços legados (só se o banco estiver vazio)
    python -m app.cli tarefa importar_cmed       # qualquer tarefa de app/workers/tarefas.py, na hora
    python -m app.cli tarefa atualizar_precos_lote --limite_termos 40
"""
import argparse
import json
import logging
import subprocess
import sys
from pathlib import Path

from .workers import tarefas

logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s %(name)s: %(message)s')
logging.getLogger('httpx').setLevel(logging.WARNING)


def _valor(texto: str):
    try:
        return json.loads(texto)
    except json.JSONDecodeError:
        return texto


def main(argv=None):
    ap = argparse.ArgumentParser(prog='app.cli')
    sub = ap.add_subparsers(dest='comando', required=True)
    sub.add_parser('migrar')
    c = sub.add_parser('carga-inicial')
    c.add_argument('--forcar', action='store_true', help='roda mesmo com o banco já populado')
    t = sub.add_parser('tarefa')
    t.add_argument('nome', choices=sorted(tarefas.TAREFAS))
    args, extras = ap.parse_known_args(argv)

    if args.comando == 'migrar':
        raiz = Path(__file__).resolve().parent.parent
        sys.exit(subprocess.call([sys.executable, '-m', 'alembic', 'upgrade', 'head'], cwd=raiz))
    if args.comando == 'carga-inicial':
        resumo = tarefas.executar('carga_inicial', se_vazio=not args.forcar)
    else:
        # --chave valor  ->  parametros {chave: valor}
        parametros = {}
        for i in range(0, len(extras), 2):
            parametros[extras[i].lstrip('-')] = _valor(extras[i + 1])
        resumo = tarefas.executar(args.nome, **parametros)
    print(json.dumps(resumo, ensure_ascii=False, indent=2, default=str))


if __name__ == '__main__':
    main()
