# Historial de versiones — T·I·D·A hub

Registro de modificaciones y mejoras desde la publicación inicial (**1.0**) hasta la versión actual del pie (`data.js` → `siteMeta.version`).

Formato: **MAJOR.MINOR.PATCH** (desde 1.1.0). Fuente de verdad: `data.js`.

---

## 1.0 — Publicación inicial

- Sitio estático **T·I·D·A hub** publicado en GitHub Pages (`frani38/TIDA-hub`).
- Navegación por secciones (INICIO, NOVEDADES, DOCENCIA, PROYECTOS, LEGISLACIÓN, MISCELÁNEA, SOBRE MÍ, AYUDA).
- Datos centralizados en `data.js`; tipografía y materiales docentes en el repositorio.

---

## Hacia 1.1 — Mejoras previas al versionado semántico de tres dígitos

Cambios publicados en `main` tras 1.0 y consolidados conceptualmente en la línea **1.1** (antes del esquema estricto `MAJOR.MINOR.PATCH`).

### Tipografía y contenido

- Tipografías **Orbitron** y **Oxanium** embebidas en local (`fonts/`), sin dependencia de Google Fonts.
- Eliminación de unidades placeholder **UP01_prueba** hasta disponer de unidades reales.
- Miscelánea: apartado renombrado a **HACKING ÉTICO** con icono `icons/hacking.png` (y posterior actualización del icono).

### Lienzo de escritorio fijo

- Ancho mínimo de escritorio (**1680px**): al reducir la ventana no se reorganiza el diseño; solo scroll horizontal/vertical.
- Bloqueo de reflow/escalado por viewport; título de bienvenida en flujo normal (evita solapes).
- Ajustes del panel **NOTICIAS** (anclaje al layout, sin huecos al redimensionar).

### Bienvenida (INICIO)

- Sustitución del efecto «máquina de escribir» por revelado tipo **cortina** izquierda → derecha.
- Ajuste de duración (~2,4 s) tras varias iteraciones de velocidad.

### AYUDA, contacto y privacidad

- Formulario de contacto con envío real vía **Web3Forms** (sin abrir el cliente de correo).
- Tras envío correcto: mensaje **Enviado** y retorno a INICIO.
- Política de privacidad actualizada (encargado Web3Forms, transferencias, etc.) en vista integrada y `privacidad.html`.
- Peso tipográfico normal en campos nombre, correo y asunto.

### Navegación e historial del navegador

- Soporte **atrás/adelante** del navegador (`History` API) entre secciones.
- Semilla de historial en INICIO; depuración de helpers obsoletos (hash/`localStorage` muertos).
- Comportamiento aceptado: desde INICIO, «atrás» puede salir del sitio.

### Documentación y pie

- Documentación de puesta en marcha: `github_TIDAhub.md` (incluye guía Web3Forms) y refresco de `README.md` / `content/README.md`.
- Enlace a **Privacidad y protección de datos** en el pie.
- Título de política: **POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS**.
- Versión del sitio centralizada en `data.js` (`siteMeta`) y sincronizada en el pie (**v1.1** como hito previo a tres dígitos).

---

## 1.1.0

- Esquema de versión fijo **MAJOR.MINOR.PATCH**.
- Regla de agente Cursor `version-semver.mdc` (bump automático en cambios publicables).
- Versión de sitio: `1.1.0`.

## 1.1.1

- La regla `version-semver` pasa a versionarse en el repo (`.cursor/rules/`, `.gitignore` ajustado).
- Versionado también de la regla `tematicas-lecturas.mdc`.

## 1.1.2 – 1.1.3

- Página `privacidad.html`: el bloque de texto recupera el ancho del área de trabajo (~1800px; se había quedado en 980px).
- Botón de cabecera **← VOLVER** con formato pill de secciones y colores invertidos (cabecera oscura).

## 1.1.4

- En `privacidad.html`, cabecera y título fijos; solo hace scroll el texto de la política.

## 1.1.5 – 1.1.6

- Badge WCAG 2.2 AA del pie: el enlace apunta a la explicación oficial de conformidad W3C (`WCAG2AA-Conformance`), no a la imagen del logo.
- Refuerzos de la política de privacidad (AYUDA + `privacidad.html`):
  - menores de 14 años (consentimiento parental, art. 7 LOPDGDD);
  - sin cookies de publicidad/analítica; `localStorage` solo para novedades vistas;
  - mención a alojamiento en **GitHub Pages** y logs técnicos;
  - plazo de conservación más concreto (gestión + máx. orientativo 12 meses; Web3Forms ~30 días);
  - campo **nombre y apellidos** alineado como obligatorio.

## 1.1.7

- Corrección visual en AYUDA: al hacer scroll de la política ya no aparece texto entrecortado entre la cabecera sticky y el área de trabajo (hueco del título sticky + sincronización de `--home-news-top` fuera de INICIO; fondo opaco del título).

## 1.1.8

- Añadido este archivo **`versions.md`** con el historial desde 1.0 hasta la línea 1.1.x.
- Publicación automática: tras cambios del sitio, commit + push a `main` sin preguntar (regla `.cursor/rules/auto-publish.mdc`).

## 1.1.9

- Nuevo paradigma documentado de **DOCENCIA**: material visual/sintético (infografías, pósters, presentaciones, PDF selectivos; apoyo de IA) en los cuatro apartados, frente al modelo clásico solo de apuntes/ejercicios PDF.
- README / `content/README.md` / referencias en `github_TIDAhub.md`: el hub se describe como espacio de divulgación amplio (no solo docencia), con el resto de secciones al mismo nivel de importancia.

---

## Convención (recordatorio)

| Dígito | Uso |
| --- | --- |
| **MAJOR** | Cambios considerables / hitos grandes |
| **MINOR** | Funcionalidad nueva acotada o mejora relevante de UX |
| **PATCH** | Textos, estilos puntuales, correcciones, docs, reglas |

Actualizar siempre `siteMeta.version` y `siteMeta.updated` en `data.js` al publicar cambios.
