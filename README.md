# MyWeb (T·I·D·A hub)

Hub web **estático** de **Tecnología, Ingeniería y Digitalización Aplicada** (ESO y Bachillerato): organiza la **docencia por unidades** y, además, centraliza **noticias, novedades, proyectos, legislación, miscelánea, contacto y recursos de apoyo**. No se limita a un repositorio de apuntes: es un espacio de divulgación y consulta con varias secciones independientes.

- **Repositorio:** [github.com/frani38/TIDA-hub](https://github.com/frani38/TIDA-hub)
- **Web publicada (GitHub Pages):** [frani38.github.io/TIDA-hub](https://frani38.github.io/TIDA-hub/)
- Guía de puesta en marcha online: **`github_TIDAhub.md`**
- Historial de versiones: **`versions.md`**

## Objetivo del proyecto

- **DOCENCIA**: navegación **etapa → nivel → materia → unidad**. En cada unidad se mantienen los cuatro apartados **Teoría**, **Actividades**, **Prácticas** y **Recursos**, pero el material deja de ser el PDF clásico de apuntes/ejercicios “al uso”. El enfoque es **visual y sintético**: piezas centradas en los puntos clave de cada tema (infografías, pósters, láminas o capturas de presentación, esquemas, y también PDF cuando aporte), a menudo elaboradas con **aplicaciones de IA**, alojadas bajo `/content/<unitId>/`.
- **INICIO**: bienvenida (revelado tipo cortina) y panel de **últimas noticias** (`data.js` → `news`). Lienzo de escritorio fijo: al reducir la ventana no se reorganiza el diseño; se usa scroll horizontal/vertical.
- **NOVEDADES**: avisos y mejoras de la web (`data.js` → `updates`), con indicador visual de contenidos nuevos.
- **Búsqueda rápida** (cabecera): resultados globales (docencia, noticias, legislación y entradas indexadas en `data.js`), sin duplicar enlaces genéricos del menú.
- **PROYECTOS**: evidencias y trabajos que muestran aplicación real de los contenidos.
- **LEGISLACIÓN**: normativa de referencia para el marco curricular (`data.js` → `legislation`).
- **MISCELÁNEA**: catálogo transversal (lecturas, media, juegos, enlaces, **Hacking ético**, etc.) según `data.js`.
- **SOBRE MÍ**: contexto del autor/proyecto e imagen en `./image/`.
- **AYUDA**: formulario de contacto con envío real vía **Web3Forms**; tras enviar, **Enviado** y retorno a INICIO. Política de privacidad en la propia sección y en **`privacidad.html`**.
- Tipografías **Orbitron / Oxanium** embebidas en `./fonts/` (sin depender de Google Fonts).

No usa framework ni paso de compilación: HTML + CSS + JS en el navegador.

## Tecnologías

| Pieza | Archivo / servicio |
| --- | --- |
| Marcado | `index.html`, `privacidad.html` |
| Estilos | `styles.css` |
| Lógica | `app.js` |
| Datos | `data.js` → `window.MYWEB_DATA` |
| Contacto | [Web3Forms](https://web3forms.com/) (`helpContact` en `data.js`) |
| Hosting | GitHub Pages (rama `main`) |

## Estructura de carpetas (resumen)

```text
MyWeb/   (repo TIDA-hub)
├── index.html
├── privacidad.html
├── styles.css
├── app.js
├── data.js
├── README.md
├── versions.md
├── github_TIDAhub.md
├── fonts/             # Orbitron, Oxanium (woff2)
├── image/             # p. ej. retrato SOBRE MÍ
├── banners/
├── icons/
├── logo/
├── content/
│   └── <unitId>/      # materiales por apartado (PDF, imágenes, infografías, …)
└── #_Informe/         # documentación LaTeX del proyecto (opcional)
```

Detalle de materiales por unidad: `content/README.md`.

## Ejecución en local

Abrir `index.html` directamente puede funcionar; es preferible un servidor HTTP local:

- Extensión Live Server (VS Code / Cursor)
- `python -m http.server 8000` → `http://localhost:8000`

Tras cambios, en la web publicada usa **Ctrl+F5** (caché de CSS/JS).

## Configuración en `data.js`

- **`helpContact`**: `web3formsAccessKey`, `notifyEmail`, `fromName` (formulario AYUDA).
- **`levels`**: etapa → niveles → materias → unidades (`id`, `label`, `code`, opcional `intro`, `pdfs` / rutas de material).
- **`sectionTabs`**: id de pestaña, etiqueta y fichero por defecto de cada apartado.
- **`news`**, **`updates`**, **`legislation`**.
- **`readings`**, **`games`**, **`media`** (Miscelánea).
- **`siteSearchEntries`**, **`contentIndex`** (+ opcional **`contentIndexZones`**).
- **`siteMeta`**: `version` y `updated` (pie del sitio).

## Comportamiento destacado

- **Historial del navegador**: tras cada carga/recarga se parte de **INICIO**; atrás/adelante recorren las secciones visitadas en esa sesión (History API + hashes). Desde INICIO, atrás puede salir del sitio (comportamiento normal del navegador).
- **Lienzo fijo (~1680px)**: media queries de “móvil” desactivadas a efectos prácticos; al estrechar la ventana aparecen barras de scroll, sin reflow agresivo.
- En **DOCENCIA**, el panel de materiales queda **sticky** en pantallas grandes.
- Tema visual fijado a **claro** (`theme-light`).
- Fechas: `YYYY.MM.DD` (y hora cuando aplica). Listados de novedades/histórico agrupados por **mes**.

## Indicador de novedades nuevas

- Hash del último ítem de `updates` → resplandor en **NOVEDADES** si hay algo sin ver.
- Al volver a **INICIO**, nudge ~10 s; al entrar en **NOVEDADES** se marca como visto.
- Caducidad: más de 14 días desde la última novedad → no se avisa.

## AYUDA y privacidad

- Campos: nombre, correo, asunto, descripción y dos consentimientos obligatorios.
- Envío por API de Web3Forms al correo configurado (p. ej. Educastur); la política describe ese encargado del tratamiento.
- Cupo orientativo del plan gratuito de Web3Forms: del orden de **250 envíos/mes** (revisar siempre en su web).
- Tras un envío correcto: pantalla **Enviado** y retorno a INICIO.
- Política reforzada (menores &lt;14, cookies/`localStorage`, GitHub Pages, plazos de conservación): ver `privacidad.html`.

## Pie de página e identidad

- Licencia **Creative Commons BY-NC-SA 4.0**.
- Copyright: **PhD.Eng. Francisco Carnero Rodríguez**, año dinámico y **versión** en el pie.
- Badge WCAG 2.2 AA enlazado a la página oficial de conformidad W3C.

### Versión del sitio (`siteMeta` en `data.js`)

Formato **MAJOR.MINOR.PATCH** (p. ej. `1.1.18` → pie `v1.1.18`). Fuente única: `siteMeta.version`. Historial narrativo: `versions.md`.

| Dígito | Cuándo |
| --- | --- |
| MAJOR | Cambios considerables / hito o rediseño |
| MINOR | Cambios menores de funcionalidad |
| PATCH | Cambios técnicos pequeños (código, estilos, fixes, docs de ingeniería) |

La versión **solo** se incrementa en cambios técnicos. Altas o correcciones de contenido editorial (libros, juegos, media, noticias, etc.) se publican **sin** bumpear. El agente versiona y publica automáticamente cuando aplica (`.cursor/rules/version-semver.mdc`, `.cursor/rules/auto-publish.mdc`).

## Documentación relacionada

| Archivo | Contenido |
| --- | --- |
| `github_TIDAhub.md` | Puesta en marcha con Git for Windows, GitHub, Pages y Web3Forms |
| `versions.md` | Historial de versiones desde 1.0 |
| `content/README.md` | Materiales por unidad (formatos visuales / PDF) |
| `#_Informe/Informe_MyWeb.tex` | Informe técnico / docente (LaTeX) |

## Próximos pasos habituales

- Completar unidades en `content/<unitId>/` con material visual (infografías, pósters, presentaciones, PDF selectivos).
- Ampliar Miscelánea / `contentIndex` / `siteSearchEntries`.
- Mantener `news`, `updates` y `legislation` al día.
