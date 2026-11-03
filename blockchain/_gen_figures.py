# -*- coding: utf-8 -*-
"""Genera figuras SVG didácticas (español) para Blockchain / Big Data."""
from pathlib import Path

OUT = Path(__file__).resolve().parent

CSS = (
    ".t{font-family:Segoe UI,system-ui,sans-serif;fill:#0f172a}"
    ".title{font-size:22px;font-weight:700}"
    ".h{font-size:16px;font-weight:700}"
    ".b{font-size:14px;font-weight:600}"
    ".s{font-size:12.5px}"
    ".xs{font-size:11px}"
    ".muted{fill:#475569}"
)

MARKER = (
    '<defs><marker id="m" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">'
    '<path d="M0,0 L6,3 L0,6 Z" fill="#334155"/></marker></defs>'
)


def svg(w, h, body, bg="#f8fafc"):
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" '
        f'viewBox="0 0 {w} {h}" role="img">\n'
        f'<rect width="{w}" height="{h}" fill="{bg}"/>\n'
        f'<defs><style type="text/css"><![CDATA[{CSS}]]></style></defs>\n'
        f"{body}\n</svg>\n"
    )


def card(x, y, w, h, fill, stroke="#cbd5e1"):
    return (
        f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" '
        f'fill="{fill}" stroke="{stroke}" stroke-width="1.5"/>'
    )


def line_arrow(x1, y1, x2, y2):
    return (
        f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" '
        f'stroke="#334155" stroke-width="3" marker-end="url(#m)"/>'
    )


files = {}

files["bc_topologias.svg"] = svg(
    1000,
    420,
    f"""
  {MARKER}
  <text class="t title" x="500" y="36" text-anchor="middle">Topologias de red</text>
  <text class="t s muted" x="500" y="58" text-anchor="middle">El blockchain opera como red distribuida de nodos con historial compartido</text>
  {card(40, 90, 290, 280, "#fff")}
  <text class="t h" x="185" y="122" text-anchor="middle">Centralizada</text>
  <circle cx="185" cy="200" r="16" fill="#2563eb"/>
  <circle cx="120" cy="160" r="10" fill="#94a3b8"/><line x1="185" y1="200" x2="120" y2="160" stroke="#64748b" stroke-width="2"/>
  <circle cx="250" cy="160" r="10" fill="#94a3b8"/><line x1="185" y1="200" x2="250" y2="160" stroke="#64748b" stroke-width="2"/>
  <circle cx="110" cy="240" r="10" fill="#94a3b8"/><line x1="185" y1="200" x2="110" y2="240" stroke="#64748b" stroke-width="2"/>
  <circle cx="260" cy="240" r="10" fill="#94a3b8"/><line x1="185" y1="200" x2="260" y2="240" stroke="#64748b" stroke-width="2"/>
  <circle cx="185" cy="280" r="10" fill="#94a3b8"/><line x1="185" y1="200" x2="185" y2="280" stroke="#64748b" stroke-width="2"/>
  <text class="t xs muted" x="185" y="330" text-anchor="middle">Un hub controla</text>
  <text class="t xs muted" x="185" y="348" text-anchor="middle">todas las conexiones</text>
  {card(355, 90, 290, 280, "#fff")}
  <text class="t h" x="500" y="122" text-anchor="middle">Descentralizada</text>
  <circle cx="445" cy="190" r="14" fill="#7c3aed"/>
  <circle cx="555" cy="190" r="14" fill="#7c3aed"/>
  <circle cx="500" cy="270" r="14" fill="#7c3aed"/>
  <line x1="445" y1="190" x2="555" y2="190" stroke="#64748b" stroke-width="2"/>
  <line x1="445" y1="190" x2="500" y2="270" stroke="#64748b" stroke-width="2"/>
  <line x1="555" y1="190" x2="500" y2="270" stroke="#64748b" stroke-width="2"/>
  <circle cx="410" cy="155" r="8" fill="#94a3b8"/><line x1="445" y1="190" x2="410" y2="155" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="420" cy="230" r="8" fill="#94a3b8"/><line x1="445" y1="190" x2="420" y2="230" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="590" cy="155" r="8" fill="#94a3b8"/><line x1="555" y1="190" x2="590" y2="155" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="580" cy="230" r="8" fill="#94a3b8"/><line x1="555" y1="190" x2="580" y2="230" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="460" cy="310" r="8" fill="#94a3b8"/><line x1="500" y1="270" x2="460" y2="310" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="540" cy="310" r="8" fill="#94a3b8"/><line x1="500" y1="270" x2="540" y2="310" stroke="#94a3b8" stroke-width="1.5"/>
  <text class="t xs muted" x="500" y="348" text-anchor="middle">Varios centros locales</text>
  {card(670, 90, 290, 280, "#ecfdf5")}
  <text class="t h" x="815" y="122" text-anchor="middle">Distribuida</text>
  <text class="t xs" x="815" y="142" text-anchor="middle" fill="#047857">(tipica del blockchain)</text>
  <circle cx="745" cy="195" r="11" fill="#059669"/><circle cx="815" cy="175" r="11" fill="#059669"/>
  <circle cx="885" cy="195" r="11" fill="#059669"/><circle cx="760" cy="255" r="11" fill="#059669"/>
  <circle cx="830" cy="270" r="11" fill="#059669"/><circle cx="890" cy="250" r="11" fill="#059669"/>
  <line x1="745" y1="195" x2="815" y2="175" stroke="#047857" stroke-width="2"/>
  <line x1="815" y1="175" x2="885" y2="195" stroke="#047857" stroke-width="2"/>
  <line x1="745" y1="195" x2="760" y2="255" stroke="#047857" stroke-width="2"/>
  <line x1="815" y1="175" x2="830" y2="270" stroke="#047857" stroke-width="2"/>
  <line x1="885" y1="195" x2="890" y2="250" stroke="#047857" stroke-width="2"/>
  <line x1="760" y1="255" x2="830" y2="270" stroke="#047857" stroke-width="2"/>
  <line x1="830" y1="270" x2="890" y2="250" stroke="#047857" stroke-width="2"/>
  <line x1="745" y1="195" x2="885" y2="195" stroke="#047857" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text class="t xs muted" x="815" y="330" text-anchor="middle">Malla de pares:</text>
  <text class="t xs muted" x="815" y="348" text-anchor="middle">sin un unico punto de fallo</text>
""",
)
# Fix accents lost in ASCII-safe draft - rewrite titles with proper Spanish
files["bc_topologias.svg"] = files["bc_topologias.svg"].replace("Topologias", "Topologías").replace("tipica", "típica").replace("unico", "único")

files["bc_hash_bloque.svg"] = svg(
    1000,
    460,
    f"""
  {MARKER}
  <text class="t title" x="500" y="34" text-anchor="middle">Hash, bloque y encadenamiento</text>
  <text class="t s muted" x="500" y="56" text-anchor="middle">Una pequena alteracion cambia la huella; cada bloque guarda el hash del anterior</text>
  {card(40, 80, 440, 150, "#fff")}
  <text class="t h" x="260" y="108" text-anchor="middle">Sensibilidad del hash</text>
  <text class="t s" x="60" y="140">Entrada A: «Hola clase»</text>
  <text class="t xs" x="60" y="162" fill="#1d4ed8">Hash → a3f1…9c02</text>
  <text class="t s" x="60" y="196">Entrada B: «Hola clase!»</text>
  <text class="t xs" x="60" y="218" fill="#b91c1c">Hash → 7e88…0b4d  (muy distinto)</text>
  {card(520, 80, 440, 150, "#fff")}
  <text class="t h" x="740" y="108" text-anchor="middle">Campos tipicos de un bloque</text>
  <text class="t s" x="545" y="140">• Hash del bloque anterior</text>
  <text class="t s" x="545" y="164">• Datos / transacciones</text>
  <text class="t s" x="545" y="188">• Marca temporal</text>
  <text class="t s" x="545" y="212">• Nonce (prueba de trabajo)</text>
  <rect x="60" y="280" width="200" height="120" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text class="t b" x="160" y="310" text-anchor="middle">Bloque 0</text>
  <text class="t xs muted" x="160" y="335" text-anchor="middle">prev: —</text>
  <text class="t xs" x="160" y="358" text-anchor="middle">hash: 00aa…</text>
  <text class="t xs muted" x="160" y="380" text-anchor="middle">datos…</text>
  {line_arrow(270, 340, 330, 340)}
  <rect x="340" y="280" width="200" height="120" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text class="t b" x="440" y="310" text-anchor="middle">Bloque 1</text>
  <text class="t xs" x="440" y="335" text-anchor="middle" fill="#1d4ed8">prev: 00aa…</text>
  <text class="t xs" x="440" y="358" text-anchor="middle">hash: 11bb…</text>
  <text class="t xs muted" x="440" y="380" text-anchor="middle">datos…</text>
  {line_arrow(550, 340, 610, 340)}
  <rect x="620" y="280" width="200" height="120" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text class="t b" x="720" y="310" text-anchor="middle">Bloque 2</text>
  <text class="t xs" x="720" y="335" text-anchor="middle" fill="#1d4ed8">prev: 11bb…</text>
  <text class="t xs" x="720" y="358" text-anchor="middle">hash: 22cc…</text>
  <text class="t xs muted" x="720" y="380" text-anchor="middle">datos…</text>
  <text class="t xs muted" x="860" y="340">append-only</text>
  <text class="t xs muted" x="500" y="440" text-anchor="middle">Si se altera el Bloque 1, deja de coincidir con el «prev» del Bloque 2</text>
""".replace("pequena alteracion", "pequeña alteración").replace("tipicos", "típicos"),
)

files["bc_consenso.svg"] = svg(
    1000,
    440,
    f"""
  {MARKER}
  <text class="t title" x="500" y="34" text-anchor="middle">Consenso: quien anade el siguiente bloque?</text>
  <text class="t s muted" x="500" y="56" text-anchor="middle">Los nodos acuerdan una sola historia compartida segun reglas publicas</text>
  {card(40, 85, 300, 300, "#fff")}
  <text class="t h" x="190" y="118" text-anchor="middle">1. Propuestas</text>
  <circle cx="110" cy="190" r="22" fill="#e2e8f0" stroke="#64748b"/><text class="t xs" x="110" y="195" text-anchor="middle">Nodo A</text>
  <circle cx="190" cy="230" r="22" fill="#e2e8f0" stroke="#64748b"/><text class="t xs" x="190" y="235" text-anchor="middle">Nodo B</text>
  <circle cx="270" cy="190" r="22" fill="#e2e8f0" stroke="#64748b"/><text class="t xs" x="270" y="195" text-anchor="middle">Nodo C</text>
  <text class="t s muted" x="190" y="290" text-anchor="middle">Cada uno puede</text>
  <text class="t s muted" x="190" y="310" text-anchor="middle">proponer un bloque</text>
  <text class="t xs" x="190" y="350" text-anchor="middle" fill="#b45309">Cual se acepta?</text>
  {card(360, 85, 280, 300, "#eff6ff")}
  <text class="t h" x="500" y="118" text-anchor="middle">2. Regla de consenso</text>
  <text class="t s" x="385" y="160">PoW: resolver un</text>
  <text class="t s" x="385" y="180">puzzle costoso (nonce)</text>
  <text class="t s" x="385" y="220">PoS: seleccion segun</text>
  <text class="t s" x="385" y="240">participacion / stake</text>
  <text class="t s" x="385" y="280">Otros: autoridad,</text>
  <text class="t s" x="385" y="300">identidad, tiempo…</text>
  <text class="t xs muted" x="500" y="350" text-anchor="middle">Verificar es mucho mas</text>
  <text class="t xs muted" x="500" y="368" text-anchor="middle">barato que publicar (PoW)</text>
  {card(660, 85, 300, 300, "#ecfdf5")}
  <text class="t h" x="810" y="118" text-anchor="middle">3. Cadena aceptada</text>
  <rect x="700" y="160" width="70" height="40" rx="6" fill="#bbf7d0" stroke="#059669"/>
  <rect x="790" y="160" width="70" height="40" rx="6" fill="#86efac" stroke="#059669"/>
  <rect x="880" y="160" width="50" height="40" rx="6" fill="#4ade80" stroke="#059669"/>
  <text class="t xs" x="735" y="185" text-anchor="middle">B0</text>
  <text class="t xs" x="825" y="185" text-anchor="middle">B1</text>
  <text class="t xs" x="905" y="185" text-anchor="middle">B2</text>
  <text class="t s" x="810" y="240" text-anchor="middle">Historia valida</text>
  <text class="t s muted" x="810" y="270" text-anchor="middle">Si hay empate: regla</text>
  <text class="t s muted" x="810" y="290" text-anchor="middle">de desempate (p. ej.</text>
  <text class="t s muted" x="810" y="310" text-anchor="middle">cadena con mas peso)</text>
  <text class="t xs" x="810" y="355" text-anchor="middle" fill="#047857">Quien escribe la historia</text>
"""
    .replace("quien anade", "quién añade")
    .replace("segun reglas publicas", "según reglas públicas")
    .replace("Cual se", "¿Cuál se")
    .replace("seleccion segun", "selección según")
    .replace("participacion", "participación")
    .replace("mas\nbarato", "más\nbarato")
    .replace("mucho mas", "mucho más")
    .replace("Historia valida", "Historia válida")
    .replace("mas peso", "más peso")
    .replace("Quien escribe", "Quién escribe")
    .replace("bloque?", "bloque?"),
)
files["bc_consenso.svg"] = files["bc_consenso.svg"].replace(
    "Consenso: quién añade el siguiente bloque?",
    "Consenso: ¿quién añade el siguiente bloque?",
)

files["bc_claves.svg"] = svg(
    1000,
    420,
    f"""
  {MARKER}
  <text class="t title" x="500" y="34" text-anchor="middle">Claves, direcciones y firma digital</text>
  <text class="t s muted" x="500" y="56" text-anchor="middle">La privada se guarda en secreto; la publica / direccion pueden mostrarse</text>
  {card(50, 90, 280, 280, "#fef2f2")}
  <text class="t h" x="190" y="125" text-anchor="middle">Clave privada</text>
  <text class="t s" x="190" y="160" text-anchor="middle">SECRETA</text>
  <rect x="90" y="180" width="200" height="50" rx="8" fill="#fecaca" stroke="#b91c1c"/>
  <text class="t xs" x="190" y="210" text-anchor="middle">•••• •••• ••••</text>
  <text class="t s muted" x="190" y="270" text-anchor="middle">Sirve para firmar</text>
  <text class="t s muted" x="190" y="292" text-anchor="middle">y controlar el activo</text>
  <text class="t xs" x="190" y="335" text-anchor="middle" fill="#b91c1c">Si se pierde → se pierde</text>
  <text class="t xs" x="190" y="352" text-anchor="middle" fill="#b91c1c">el control (sin «reset»)</text>
  {line_arrow(350, 230, 410, 230)}
  <text class="t xs muted" x="380" y="215" text-anchor="middle">deriva</text>
  {card(430, 90, 280, 280, "#eff6ff")}
  <text class="t h" x="570" y="125" text-anchor="middle">Clave publica</text>
  <text class="t s" x="570" y="160" text-anchor="middle">VISIBLE</text>
  <rect x="470" y="180" width="200" height="50" rx="8" fill="#bfdbfe" stroke="#1d4ed8"/>
  <text class="t xs" x="570" y="210" text-anchor="middle">04a9…f3c1</text>
  <text class="t s muted" x="570" y="270" text-anchor="middle">Sirve para verificar</text>
  <text class="t s muted" x="570" y="292" text-anchor="middle">la firma de otro</text>
  <text class="t xs" x="570" y="335" text-anchor="middle" fill="#1d4ed8">No revela la privada</text>
  {line_arrow(730, 230, 790, 230)}
  <text class="t xs muted" x="760" y="215" text-anchor="middle">hash</text>
  {card(810, 90, 150, 280, "#ecfdf5")}
  <text class="t h" x="885" y="125" text-anchor="middle">Direccion</text>
  <text class="t s" x="885" y="160" text-anchor="middle">publica</text>
  <rect x="830" y="180" width="110" height="70" rx="8" fill="#bbf7d0" stroke="#059669"/>
  <text class="t xs" x="885" y="210" text-anchor="middle">bc1q…</text>
  <text class="t xs" x="885" y="230" text-anchor="middle">8k2p</text>
  <text class="t xs muted" x="885" y="300" text-anchor="middle">Para recibir</text>
  <text class="t xs muted" x="885" y="318" text-anchor="middle">sin revelar</text>
  <text class="t xs muted" x="885" y="336" text-anchor="middle">la privada</text>
"""
    .replace("la publica / direccion", "la pública / dirección")
    .replace("Clave publica", "Clave pública")
    .replace(">Direccion<", ">Dirección<")
    .replace(">publica<", ">pública<"),
)

files["bc_contratos.svg"] = svg(
    1000,
    440,
    f"""
  <text class="t title" x="500" y="34" text-anchor="middle">Capas: blockchain, criptomoneda y contrato inteligente</text>
  <text class="t s muted" x="500" y="56" text-anchor="middle">No son lo mismo: la criptomoneda es una aplicacion; el contrato automatiza reglas</text>
  <rect x="120" y="90" width="760" height="70" rx="12" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text class="t h" x="500" y="120" text-anchor="middle">Capa de registro: blockchain (libro mayor distribuido)</text>
  <text class="t xs muted" x="500" y="142" text-anchor="middle">Historial compartido, hash, consenso, nodos</text>
  <rect x="160" y="190" width="320" height="100" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
  <text class="t h" x="320" y="230" text-anchor="middle">Criptomoneda</text>
  <text class="t s muted" x="320" y="255" text-anchor="middle">Aplicacion de valor</text>
  <text class="t xs muted" x="320" y="275" text-anchor="middle">(p. ej. Bitcoin)</text>
  <rect x="520" y="190" width="320" height="100" rx="12" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
  <text class="t h" x="680" y="230" text-anchor="middle">Contrato inteligente</text>
  <text class="t s muted" x="680" y="255" text-anchor="middle">Programa en el ledger:</text>
  <text class="t xs muted" x="680" y="275" text-anchor="middle">«si condicion → accion»</text>
  {card(120, 320, 360, 90, "#fff")}
  <text class="t b" x="300" y="355" text-anchor="middle">Red permissionless</text>
  <text class="t xs muted" x="300" y="380" text-anchor="middle">Publica: cualquiera segun reglas</text>
  {card(520, 320, 360, 90, "#fff")}
  <text class="t b" x="700" y="355" text-anchor="middle">Red permissioned</text>
  <text class="t xs muted" x="700" y="380" text-anchor="middle">Solo participantes autorizados</text>
"""
    .replace("aplicacion", "aplicación")
    .replace("Aplicacion", "Aplicación")
    .replace("condicion → accion", "condición → acción")
    .replace("Publica: cualquiera segun", "Pública: cualquiera según"),
)

files["bc_limites.svg"] = svg(
    1000,
    440,
    f"""
  <text class="t title" x="500" y="34" text-anchor="middle">Que garantiza el blockchain… y que no</text>
  <text class="t s muted" x="500" y="56" text-anchor="middle">Pensamiento critico: separar protocolo, mundo real y esloganes</text>
  {card(40, 85, 440, 320, "#ecfdf5")}
  <text class="t h" x="260" y="120" text-anchor="middle" fill="#047857">Si garantiza (en lo esencial)</text>
  <text class="t s" x="70" y="160">• Historial coherente segun el protocolo</text>
  <text class="t s" x="70" y="190">• Alteraciones detectables (tamper-evident)</text>
  <text class="t s" x="70" y="220">• Reescritura silenciosa muy costosa</text>
  <text class="t s" x="70" y="250">• Verificacion abierta entre nodos</text>
  <text class="t s" x="70" y="280">• Reglas de consenso explicitas</text>
  <text class="t xs muted" x="260" y="350" text-anchor="middle">Integridad del registro acordado</text>
  {card(520, 85, 440, 320, "#fef2f2")}
  <text class="t h" x="740" y="120" text-anchor="middle" fill="#b91c1c">No garantiza automaticamente</text>
  <text class="t s" x="550" y="160">• Que un dato del mundo real sea cierto</text>
  <text class="t s" x="550" y="190">• Que no te estafen (phishing, claves)</text>
  <text class="t s" x="550" y="220">• Privacidad absoluta en redes publicas</text>
  <text class="t s" x="550" y="250">• Correccion facil de errores publicados</text>
  <text class="t s" x="550" y="280">• Legalidad, etica o eficiencia «por magia»</text>
  <text class="t xs muted" x="740" y="350" text-anchor="middle">Hay que demostrar cada afirmacion</text>
"""
    .replace("Que garantiza", "Qué garantiza")
    .replace("y que no", "y qué no")
    .replace("critico", "crítico")
    .replace("esloganes", "eslóganes")
    .replace("Si garantiza", "Sí garantiza")
    .replace("segun el", "según el")
    .replace("Verificacion", "Verificación")
    .replace("explicitas", "explícitas")
    .replace("automaticamente", "automáticamente")
    .replace("redes publicas", "redes públicas")
    .replace("Correccion facil", "Corrección fácil")
    .replace("etica", "ética")
    .replace("afirmacion", "afirmación"),
)

files["bd_macrodatos.svg"] = svg(
    1000,
    420,
    f"""
  <text class="t title" x="500" y="34" text-anchor="middle">Cuando hablamos de macrodatos (Big Data)?</text>
  <text class="t s muted" x="500" y="56" text-anchor="middle">Cuando volumen, velocidad o variedad superan las herramientas convencionales</text>
  {card(50, 90, 220, 200, "#dbeafe")}
  <text class="t h" x="160" y="130" text-anchor="middle">Volumen</text>
  <text class="t s muted" x="160" y="165" text-anchor="middle">Muchas</text>
  <text class="t s muted" x="160" y="185" text-anchor="middle">observaciones</text>
  <text class="t xs" x="160" y="230" text-anchor="middle">MB → GB → TB → PB</text>
  {card(290, 90, 220, 200, "#dcfce7")}
  <text class="t h" x="400" y="130" text-anchor="middle">Velocidad</text>
  <text class="t s muted" x="400" y="165" text-anchor="middle">Ritmo de</text>
  <text class="t s muted" x="400" y="185" text-anchor="middle">llegada / respuesta</text>
  <text class="t xs" x="400" y="230" text-anchor="middle">lote → casi tiempo real</text>
  {card(530, 90, 220, 200, "#fce7f3")}
  <text class="t h" x="640" y="130" text-anchor="middle">Variedad</text>
  <text class="t s muted" x="640" y="165" text-anchor="middle">Formatos y</text>
  <text class="t s muted" x="640" y="185" text-anchor="middle">fuentes distintas</text>
  <text class="t xs" x="640" y="230" text-anchor="middle">tablas, texto, sensor…</text>
  {card(770, 90, 180, 200, "#f1f5f9")}
  <text class="t h" x="860" y="130" text-anchor="middle">Resultado</text>
  <text class="t s muted" x="860" y="170" text-anchor="middle">Hace falta un</text>
  <text class="t s muted" x="860" y="190" text-anchor="middle">ecosistema:</text>
  <text class="t xs" x="860" y="230" text-anchor="middle">infra + metodos</text>
  <text class="t xs" x="860" y="248" text-anchor="middle">+ organizacion</text>
  <text class="t s" x="500" y="340" text-anchor="middle">«Grande» es relativo a la pregunta y al contexto tecnologico</text>
  <text class="t xs muted" x="500" y="370" text-anchor="middle">Un conjunto enorme puede ser inutil; uno moderado, decisivo</text>
"""
    .replace("Cuando hablamos", "¿Cuándo hablamos")
    .replace("Data)?", "Data)?")
    .replace("metodos", "métodos")
    .replace("organizacion", "organización")
    .replace("tecnologico", "tecnológico")
    .replace("inutil", "inútil"),
)

files["bd_5v.svg"] = svg(
    1000,
    420,
    f"""
  <text class="t title" x="500" y="34" text-anchor="middle">Las cinco V como dimensiones de evaluacion</text>
  <text class="t s muted" x="500" y="56" text-anchor="middle">No basta medir tamano: hay que evaluar calidad y utilidad</text>
  {card(30, 90, 180, 260, "#dbeafe")}
  <text class="t h" x="120" y="130" text-anchor="middle">Volumen</text>
  <text class="t xs muted" x="120" y="170" text-anchor="middle">Cuantos datos</text>
  <text class="t xs muted" x="120" y="190" text-anchor="middle">y variables</text>
  {card(220, 90, 180, 260, "#dcfce7")}
  <text class="t h" x="310" y="130" text-anchor="middle">Velocidad</text>
  <text class="t xs muted" x="310" y="170" text-anchor="middle">Con que ritmo</text>
  <text class="t xs muted" x="310" y="190" text-anchor="middle">se generan</text>
  {card(410, 90, 180, 260, "#fce7f3")}
  <text class="t h" x="500" y="130" text-anchor="middle">Variedad</text>
  <text class="t xs muted" x="500" y="170" text-anchor="middle">Que formatos</text>
  <text class="t xs muted" x="500" y="190" text-anchor="middle">y estructuras</text>
  {card(600, 90, 180, 260, "#fef3c7")}
  <text class="t h" x="690" y="130" text-anchor="middle">Veracidad</text>
  <text class="t xs muted" x="690" y="170" text-anchor="middle">Exactitud,</text>
  <text class="t xs muted" x="690" y="190" text-anchor="middle">sesgos, ruido</text>
  <text class="t xs" x="690" y="240" text-anchor="middle" fill="#b45309">Sin veracidad,</text>
  <text class="t xs" x="690" y="258" text-anchor="middle" fill="#b45309">el volumen engana</text>
  {card(790, 90, 180, 260, "#ede9fe")}
  <text class="t h" x="880" y="130" text-anchor="middle">Valor</text>
  <text class="t xs muted" x="880" y="170" text-anchor="middle">Sirve para</text>
  <text class="t xs muted" x="880" y="190" text-anchor="middle">la decision?</text>
  <text class="t xs" x="880" y="240" text-anchor="middle" fill="#6d28d9">Sin valor,</text>
  <text class="t xs" x="880" y="258" text-anchor="middle" fill="#6d28d9">analisis inutil</text>
  <text class="t xs muted" x="120" y="320" text-anchor="middle">escala</text>
  <text class="t xs muted" x="310" y="320" text-anchor="middle">escala</text>
  <text class="t xs muted" x="500" y="320" text-anchor="middle">escala</text>
  <text class="t xs muted" x="690" y="320" text-anchor="middle">calidad</text>
  <text class="t xs muted" x="880" y="320" text-anchor="middle">utilidad</text>
"""
    .replace("evaluacion", "evaluación")
    .replace("tamano", "tamaño")
    .replace("Cuantos", "Cuántos")
    .replace("Con que", "Con qué")
    .replace("Que formatos", "Qué formatos")
    .replace("engana", "engaña")
    .replace("la decision?", "la decisión?")
    .replace("Sirve para", "¿Sirve para")
    .replace("analisis inutil", "análisis inútil"),
)

files["bd_tipos.svg"] = svg(
    1000,
    440,
    f"""
  <text class="t title" x="500" y="34" text-anchor="middle">Tipos de datos segun su organizacion</text>
  <text class="t s muted" x="500" y="56" text-anchor="middle">La tipologia condiciona almacenamiento, herramientas y riesgos de error</text>
  {card(40, 85, 300, 310, "#fff")}
  <text class="t h" x="190" y="120" text-anchor="middle">Estructurados</text>
  <rect x="70" y="145" width="240" height="90" rx="6" fill="#f1f5f9" stroke="#64748b"/>
  <text class="t xs" x="90" y="170">id | temp | fecha</text>
  <text class="t xs" x="90" y="192">01 | 18.2 | 03-11</text>
  <text class="t xs" x="90" y="214">02 | 17.8 | 03-11</text>
  <text class="t s muted" x="190" y="270" text-anchor="middle">Esquema rigido</text>
  <text class="t xs muted" x="190" y="295" text-anchor="middle">Tablas, CSV limpio</text>
  <text class="t xs muted" x="190" y="320" text-anchor="middle">Facil de consultar</text>
  {card(350, 85, 300, 310, "#fff")}
  <text class="t h" x="500" y="120" text-anchor="middle">Semiestructurados</text>
  <rect x="380" y="145" width="240" height="110" rx="6" fill="#f8fafc" stroke="#64748b"/>
  <text class="t xs" x="395" y="170" fill="#0369a1">{{</text>
  <text class="t xs" x="410" y="190">"estacion": "AEMET",</text>
  <text class="t xs" x="410" y="210">"temp": 18.2,</text>
  <text class="t xs" x="410" y="230">"extra": {{…}}</text>
  <text class="t xs" x="395" y="248" fill="#0369a1">}}</text>
  <text class="t s muted" x="500" y="295" text-anchor="middle">Marcas flexibles</text>
  <text class="t xs muted" x="500" y="320" text-anchor="middle">JSON, XML, logs</text>
  <text class="t xs muted" x="500" y="345" text-anchor="middle">Campos opcionales</text>
  {card(660, 85, 300, 310, "#fff")}
  <text class="t h" x="810" y="120" text-anchor="middle">No estructurados</text>
  <rect x="690" y="145" width="240" height="90" rx="6" fill="#fef3c7" stroke="#d97706"/>
  <text class="t xs" x="810" y="175" text-anchor="middle">texto · audio</text>
  <text class="t xs" x="810" y="198" text-anchor="middle">video · imagen</text>
  <text class="t xs" x="810" y="220" text-anchor="middle">comentarios libres</text>
  <text class="t s muted" x="810" y="280" text-anchor="middle">Sin esquema tabular</text>
  <text class="t xs muted" x="810" y="305" text-anchor="middle">Requieren extraccion</text>
  <text class="t xs muted" x="810" y="330" text-anchor="middle">o etiquetado previo</text>
  <text class="t xs muted" x="500" y="420" text-anchor="middle">En la practica: sistemas hibridos (metadatos + contenido)</text>
"""
    .replace("segun su organizacion", "según su organización")
    .replace("tipologia", "tipología")
    .replace("rigido", "rígido")
    .replace("Facil", "Fácil")
    .replace('"estacion"', '"estación"')
    .replace("video", "vídeo")
    .replace("extraccion", "extracción")
    .replace("practica", "práctica")
    .replace("hibridos", "híbridos"),
)

files["bd_ciclo.svg"] = svg(
    1000,
    380,
    f"""
  {MARKER}
  <text class="t title" x="500" y="34" text-anchor="middle">Ciclo de vida de los datos</text>
  <text class="t s muted" x="500" y="56" text-anchor="middle">Cada etapa puede introducir o corregir error</text>
  <rect x="30" y="120" width="150" height="120" rx="12" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <text class="t b" x="105" y="160" text-anchor="middle">1. Captura</text>
  <text class="t xs muted" x="105" y="190" text-anchor="middle">sensores, APIs,</text>
  <text class="t xs muted" x="105" y="208" text-anchor="middle">formularios, logs</text>
  {line_arrow(185, 180, 215, 180)}
  <rect x="220" y="120" width="150" height="120" rx="12" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
  <text class="t b" x="295" y="160" text-anchor="middle">2. Almacen</text>
  <text class="t xs muted" x="295" y="190" text-anchor="middle">ingesta y</text>
  <text class="t xs muted" x="295" y="208" text-anchor="middle">almacenamiento</text>
  {line_arrow(375, 180, 405, 180)}
  <rect x="410" y="120" width="150" height="120" rx="12" fill="#86efac" stroke="#059669" stroke-width="2"/>
  <text class="t b" x="485" y="155" text-anchor="middle">3. Proceso</text>
  <text class="t xs muted" x="485" y="185" text-anchor="middle">limpieza,</text>
  <text class="t xs muted" x="485" y="203" text-anchor="middle">agregacion…</text>
  {line_arrow(565, 180, 595, 180)}
  <rect x="600" y="120" width="150" height="120" rx="12" fill="#4ade80" stroke="#059669" stroke-width="2"/>
  <text class="t b" x="675" y="155" text-anchor="middle">4. Analisis</text>
  <text class="t xs muted" x="675" y="185" text-anchor="middle">estadistica,</text>
  <text class="t xs muted" x="675" y="203" text-anchor="middle">visualizacion…</text>
  {line_arrow(755, 180, 785, 180)}
  <rect x="790" y="120" width="170" height="120" rx="12" fill="#22c55e" stroke="#047857" stroke-width="2"/>
  <text class="t b" x="875" y="155" text-anchor="middle">5. Decision</text>
  <text class="t xs" x="875" y="185" text-anchor="middle" fill="#064e3b">comunicacion</text>
  <text class="t xs" x="875" y="203" text-anchor="middle" fill="#064e3b">responsable</text>
  <text class="t s" x="500" y="300" text-anchor="middle">Trazabilidad: documentar origen, filtros y limites de la conclusion</text>
  <text class="t xs muted" x="500" y="330" text-anchor="middle">Hallazgo ≠ interpretacion ≠ recomendacion</text>
"""
    .replace("Almacen", "Almacén")
    .replace("agregacion", "agregación")
    .replace("Analisis", "Análisis")
    .replace("estadistica", "estadística")
    .replace("visualizacion", "visualización")
    .replace("Decision", "Decisión")
    .replace("comunicacion", "comunicación")
    .replace("limites de la conclusion", "límites de la conclusión")
    .replace("interpretacion", "interpretación")
    .replace("recomendacion", "recomendación"),
)

files["bd_rgpd.svg"] = svg(
    1000,
    440,
    f"""
  <text class="t title" x="500" y="34" text-anchor="middle">Privacidad y uso responsable (RGPD)</text>
  <text class="t s muted" x="500" y="56" text-anchor="middle">Mas datos amplifican conocimiento… y riesgos de vigilancia o discriminacion</text>
  {card(40, 85, 450, 310, "#eff6ff")}
  <text class="t h" x="265" y="120" text-anchor="middle">Principios clave</text>
  <text class="t s" x="70" y="160">• Licitud, lealtad y transparencia</text>
  <text class="t s" x="70" y="190">• Minimizacion (no «todo por si acaso»)</text>
  <text class="t s" x="70" y="220">• Exactitud y limitacion del plazo</text>
  <text class="t s" x="70" y="250">• Integridad y confidencialidad</text>
  <text class="t s" x="70" y="280">• Responsabilidad proactiva</text>
  <text class="t xs muted" x="265" y="340" text-anchor="middle">Derechos: acceso, rectificacion, oposicion…</text>
  {card(520, 85, 440, 310, "#fef3c7")}
  <text class="t h" x="740" y="120" text-anchor="middle">Buenas preguntas de aula</text>
  <text class="t s" x="550" y="165">1. Que datos son personales?</text>
  <text class="t s" x="550" y="200">2. Que finalidad es legitima?</text>
  <text class="t s" x="550" y="235">3. Que sobra (minimizacion)?</text>
  <text class="t s" x="550" y="270">4. Anonimizar elimina todo riesgo?</text>
  <text class="t xs muted" x="740" y="340" text-anchor="middle">No siempre: existe reidentificacion</text>
"""
    .replace("Mas datos", "Más datos")
    .replace("discriminacion", "discriminación")
    .replace("Minimizacion", "Minimización")
    .replace("minimizacion", "minimización")
    .replace("por si acaso", "por si acaso")
    .replace("limitacion", "limitación")
    .replace("rectificacion, oposicion", "rectificación, oposición")
    .replace("1. Que datos", "1. ¿Qué datos")
    .replace("2. Que finalidad es legitima?", "2. ¿Qué finalidad es legítima?")
    .replace("3. Que sobra", "3. ¿Qué sobra")
    .replace("4. Anonimizar", "4. ¿Anonimizar")
    .replace("reidentificacion", "reidentificación"),
)

files["bd_ia_relacion.svg"] = svg(
    1000,
    420,
    f"""
  <text class="t title" x="500" y="34" text-anchor="middle">Big Data e Inteligencia Artificial: relacionados, no equivalentes</text>
  <text class="t s muted" x="500" y="56" text-anchor="middle">Mas datos no implican automaticamente mejores decisiones</text>
  <circle cx="340" cy="230" r="130" fill="#bfdbfe" fill-opacity="0.85" stroke="#2563eb" stroke-width="2"/>
  <circle cx="660" cy="230" r="130" fill="#bbf7d0" fill-opacity="0.85" stroke="#059669" stroke-width="2"/>
  <text class="t h" x="280" y="180" text-anchor="middle">Big Data</text>
  <text class="t xs muted" x="280" y="205" text-anchor="middle">volumen / velocidad</text>
  <text class="t xs muted" x="280" y="223" text-anchor="middle">/ variedad</text>
  <text class="t xs muted" x="280" y="250" text-anchor="middle">tambien con</text>
  <text class="t xs muted" x="280" y="268" text-anchor="middle">estadistica clasica</text>
  <text class="t h" x="720" y="180" text-anchor="middle">IA</text>
  <text class="t xs muted" x="720" y="205" text-anchor="middle">modelos que</text>
  <text class="t xs muted" x="720" y="223" text-anchor="middle">aprenden / razonan</text>
  <text class="t xs muted" x="720" y="250" text-anchor="middle">pueden usar</text>
  <text class="t xs muted" x="720" y="268" text-anchor="middle">pocos o muchos datos</text>
  <text class="t b" x="500" y="220" text-anchor="middle">Solape</text>
  <text class="t xs" x="500" y="242" text-anchor="middle">entrenar con</text>
  <text class="t xs" x="500" y="260" text-anchor="middle">macrodatos</text>
  <text class="t s" x="500" y="390" text-anchor="middle">Limites: sesgo, opacidad, coste y falsa objetividad de los numeros grandes</text>
"""
    .replace("Mas datos no implican automaticamente", "Más datos no implican automáticamente")
    .replace("tambien", "también")
    .replace("estadistica clasica", "estadística clásica")
    .replace("Limites:", "Límites:")
    .replace("numeros", "números"),
)

OWN = "Elaboración propia para T·I·D·A hub (material didáctico)."

for name, content in files.items():
    path = OUT / name
    path.write_text(content, encoding="utf-8")
    print("wrote", name, path.stat().st_size)

print("OWN_CREDIT=", OWN)
print("done", len(files))
