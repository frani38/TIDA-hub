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

## 1.1.10

- INICIO: primer intento de quitar scroll vertical fantasma (insuficiente: seguía el mínimo de lienzo 780px).

## 1.1.11

- INICIO (bienvenida): se elimina el `min-height: 780px` del panel; la página queda acotada al viewport (`overflow-y: hidden` en html/body). Solo hace scroll interno el texto si no cabe, y el panel NOTICIAS.

## 1.1.12

- MISCELÁNEA (hub de iconos) y SOBRE MÍ: mismo acote al viewport que INICIO (sin barra de scroll de página cuando el contenido cabe). En SOBRE MÍ se quita el padding inferior duplicado del pie.

## 1.1.13

- NOVEDADES: el título de cada entrada (LIBRO / JUEGO / MEDIA, y avisos manuales con `navTarget`/`miscId`/`url`) es hipervínculo al elemento en su sección (p. ej. ficha en Miscelánea).

## 1.1.14

- NOVEDADES: el hipervínculo queda solo en el nombre del elemento (no en el prefijo LIBRO:/JUEGO:/MEDIA:).

## 1.1.15

- `versions.md`: tabla resumen final (versión + descripción breve).
- `content/README.md`: documentación alineada con el paradigma visual/sintético de DOCENCIA.

## 1.1.16

- Lecturas: alta de **Chernóbil 01:23:40** (Andrew Leatherbarrow; temática Histórico; portada `books/0099.jpg`).

## 1.1.17

- Lecturas: corrección del año de *Chernóbil 01:23:40* → **2019**.

## 1.1.18

- Política de versión: bumpear solo en **cambios técnicos**; altas/ediciones de contenido editorial no cambian `siteMeta.version` (regla `version-semver.mdc`).

## 1.1.19

- NOVEDADES: orden corregido para que lo más reciente quede siempre arriba (desempate alineado con catálogos antepuestos).

## 1.1.20

- Miscelánea (Lecturas, Juegos, Media): mismo criterio de orden — lo más reciente arriba al anteponer entradas en `data.js`.

## 1.1.21

- NOVEDADES: el aviso del botón (brillo) usa huella de **todas** las entradas; una alta nueva vuelve a activarlo aunque compartan fecha.

## 1.1.22

- Carga de `data.js` con anti-caché (`Date.now()`), como `app.js`, para que el pie muestre la versión publicada tras recargar.

## 1.1.23

- NOVEDADES: resalte azul por **cada** entrada no visitada (no solo la última); se quita al abrir la ficha o al acusar recibo en avisos sin enlace. El botón NOVEDADES brilla mientras quede alguna pendiente.

## 1.1.24

- Anti-caché de `styles.css` y resalte de entradas no vistas más visible (evita que el navegador conserve la regla antigua `is-latest-update`).

## 1.1.25

- NOVEDADES: la rueda del ratón hace scroll en todo el contenido (ya no hace falta apuntar a la barra).

## 1.1.26

- Scroll con rueda global: si hay barra activa, la rueda mueve el contenedor principal aunque el puntero esté en cabecera u otras zonas (también en `privacidad.html`). Paneles anidados (p. ej. NOTICIAS) siguen con scroll propio.

## 1.1.27

- NOTICIAS: resalte dorado en cada noticia no visitada; se quita al hacer clic en el título con enlace.

## 1.1.28

- INICIO: texto de cierre de bienvenida actualizado («experiencia de navegación»).

## 1.1.29

- NOTICIAS: el resalte dorado se sincroniza entre el bloque lateral y el HISTÓRICO al abrir el enlace.

## 1.1.30

- Rendimiento: anti-caché de assets por versión del sitio (no `Date.now()` en cada visita); iconos y portadas grandes comprimidos/reescalados.

## 1.1.31

- Documentación actualizada (`README.md`, `github_TIDAhub.md`, `content/README.md`, `versions.md`) e informe LaTeX local alineados con el estado **1.1.30+** (avisos no leídos, caché por versión, política de bump, scroll, etc.).

## 1.1.32

- Lecturas: alta de **Pentesting con Kali** (portada `books/0103.jpg`); bump de assets para invalidar caché de `data.js`.

## 1.1.33

- Historial del navegador: al abrir un subapartado de Miscelánea (p. ej. Lecturas) se registra `miscId` en `history`/`#miscelanea/…`, así atrás vuelve al hub de Miscelánea (no salta a INICIO). Misma lógica en restaurar hash/popstate; ← VOLVER de privacidad usa `history.back()` cuando corresponde.

## 1.1.34

- Bienvenida (INICIO): la lista de apartados de Miscelánea menciona **Hacking ético** en lugar de Hardware y Software.

---

## Convención (recordatorio)

| Dígito | Uso |
| --- | --- |
| **MAJOR** | Cambios considerables / hitos grandes |
| **MINOR** | Funcionalidad nueva acotada o mejora relevante de UX |
| **PATCH** | Cambios técnicos pequeños (código, estilos, docs de ingeniería, reglas) |

**Versionar solo cambios técnicos.** Altas o correcciones de contenido editorial (libros, juegos, media, noticias, legislación, materiales de `content/`/`books/`, etc.) se publican **sin** incrementar `siteMeta.version`.

Nota: **1.1.16** y **1.1.17** fueron bumps por contenido; a partir de la política actual esos casos ya no generan número nuevo.

---

## Resumen de versiones

| Versión | Descripción breve |
| --- | --- |
| **1.0** | Publicación inicial del hub en GitHub Pages |
| **→ 1.1** | Tipografías locales, lienzo fijo, Web3Forms, historial, privacidad, Hacking ético |
| **1.1.0** | Versionado semántico MAJOR.MINOR.PATCH |
| **1.1.1** | Reglas Cursor versionadas en el repo |
| **1.1.2–1.1.3** | Privacidad a ancho completo; botón ← VOLVER |
| **1.1.4** | Título fijo en `privacidad.html` (scroll solo del texto) |
| **1.1.5–1.1.6** | Enlace WCAG oficial; política reforzada (menores, cookies, Pages) |
| **1.1.7** | Sin texto entrecortado bajo cabecera en AYUDA |
| **1.1.8** | Historial `versions.md` y publicación automática |
| **1.1.9** | Paradigma DOCENCIA visual; README de hub amplio |
| **1.1.10** | Primer ajuste de scroll fantasma en INICIO |
| **1.1.11** | INICIO acotado al viewport (sin scroll de página) |
| **1.1.12** | Misma acotación en Miscelánea (hub) y Sobre mí |
| **1.1.13** | Novedades: títulos enlazan a fichas en Miscelánea |
| **1.1.14** | Enlace solo en el nombre (no en LIBRO:/JUEGO:/MEDIA:) |
| **1.1.15** | Tabla resumen de versiones; `content/README` de Docencia visual |
| **1.1.16** | Lectura nueva: Chernóbil 01:23:40 (Leatherbarrow) |
| **1.1.17** | Año de Chernóbil 01:23:40 corregido a 2019 |
| **1.1.18** | Versión solo en cambios técnicos (no en contenido) |
| **1.1.19** | NOVEDADES: más reciente siempre arriba |
| **1.1.20** | Lecturas/Juegos/Media: más reciente arriba |
| **1.1.21** | Aviso NOVEDADES: hash del conjunto completo |
| **1.1.22** | `data.js` sin caché fija (versión del pie fiable) |
| **1.1.23** | NOVEDADES: resalte por ítem hasta visitarlo |
| **1.1.24** | CSS anti-caché; resalte de entradas no vistas visible |
| **1.1.25** | NOVEDADES: rueda del ratón en todo el contenido |
| **1.1.26** | Rueda → scroll principal en todas las secciones |
| **1.1.27** | NOTICIAS: resalte dorado hasta abrir el enlace |
| **1.1.28** | Texto de cierre de bienvenida en INICIO |
| **1.1.29** | NOTICIAS: resalte sincronizado con HISTÓRICO |
| **1.1.30** | Caché de assets + compresión de iconos/portadas |
| **1.1.31** | Docs e informe alineados con el sitio actual |
| **1.1.32** | Lectura Pentesting con Kali + caché data.js |
| **1.1.33** | Historial: atrás desde Miscelánea/subapartados vuelve al hub |
| **1.1.34** | Bienvenida: Hacking ético en la lista de Miscelánea |
