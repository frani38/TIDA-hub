# -*- coding: utf-8 -*-
from pathlib import Path
import re

t = Path(__file__).resolve().parents[1].joinpath("data.js").read_text(encoding="utf-8")
# Check no raw newlines inside body strings for bc_que_es
m = re.search(
    r'id:\s*"bc_que_es"[\s\S]*?body:\s*\n\s*"((?:\\.|[^"\\])*)"',
    t,
)
if not m:
    raise SystemExit("bc_que_es body not found or broken")
body = m.group(1).encode("utf-8").decode("unicode_escape")
print("bc_que_es paragraphs:", body.count("\n\n") + 1, "chars:", len(body))
print("literal \\n count in source:", m.group(1).count("\\n"))
print("raw newline in body source?:", "\n" in m.group(1))
print("BdE ref:", "beaa1804-art26.pdf" in t)
# Try exec subset? Just check all section ids still have image after body
for sid in [
    "bc_que_es",
    "bc_hash",
    "bc_consenso",
    "bc_claves",
    "bc_cripto_contratos",
    "bc_limites",
    "bd_que_es",
    "bd_5v",
    "bd_tipos",
    "bd_ciclo",
    "bd_etica",
    "bd_aplicaciones",
]:
    mm = re.search(
        rf'id:\s*"{sid}"[\s\S]*?body:\s*\n\s*"((?:\\.|[^"\\])*)"\s*,\s*\n\s*image:',
        t,
    )
    if not mm:
        raise SystemExit(f"broken section {sid}")
    print(sid, "ok", "len", len(mm.group(1)))
print("ALL_OK")
