# T·I·D·A hub (MyWeb)

Sitio web **estático** para organizar y publicar materiales de **Tecnología, Ingeniería y Digitalización Aplicada** (ESO y Bachillerato), con navegación **etapa → nivel → materia → unidad** y secciones de apoyo (noticias, legislación, ayuda, miscelánea, etc.).

- **Repositorio:** [github.com/frani38/TIDA-hub](https://github.com/frani38/TIDA-hub)
- **Web publicada (GitHub Pages):** [frani38.github.io/TIDA-hub](https://frani38.github.io/TIDA-hub/)
- Guía de puesta en marcha online: **`github_TIDAhub.md`**

## Objetivo del proyecto

- **INICIO**: mensaje de bienvenida (revelado tipo cortina) y panel de **últimas noticias** (`data.js` → `news`). Lienzo de escritorio fijo: al reducir la ventana no se reorganiza el diseño; se usa scroll horizontal/vertical.
- **NOVEDADES**: avisos y mejoras de la web (`data.js` → `updates`).
- **DOCENCIA**: selectores de etapa, nivel, materia y unidad; en cada unidad, accesos a **Teoría**, **Actividades**, **Prácticas** y **Recursos** (PDF en `/content/<unitId>/`).
- **Búsqueda rápida** (cabecera): resultados globales (docencia, noticias, legislación, entradas indexadas en `data.js`).
- **LEGISLACIÓN**, **PROYECTOS**, **MISCELÁNEA**: vistas según `data.js` (p. ej. `legislation`, lecturas, juegos, media, **Hacking ético**, etc.).
- **SOBRE MÍ**: texto biográfico e imagen en `./image/`.
- **AYUDA**: formulario de contacto con envío real vía **Web3Forms** (sin abrir el cliente de correo del visitante); tras enviar, mensaje **Enviado** y retorno a INICIO. Política de privacidad integrada y en `privacidad.html`.
- Tipografías **Orbitron / Oxanium** embebidas en `./fonts/` (no dependen de Google Fonts).

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
├── github_TIDAhub.md
├── fonts/             # Orbitron, Oxanium (woff2)
├── image/             # p. ej. retrato SOBRE MÍ
├── banners/
├── icons/
├── logo/
├── content/
│   └── <unitId>/
│       ├── teoria.pdf
│       ├── actividades.pdf
│       ├── practicas.pdf
│       └── recursos.pdf
└── #_Informe/         # documentación LaTeX del proyecto (opcional)
```

Detalle de PDF por unidad: `content/README.md`.

## Ejecución en local

Abrir `index.html` directamente puede funcionar; es preferible un servidor HTTP local:

- Extensión Live Server (VS Code / Cursor)
- `python -m http.server 8000` → `http://localhost:8000`

Tras cambios, en la web publicada usa **Ctrl+F5** (caché de CSS/JS).

## Configuración en `data.js`

- **`helpContact`**: `web3formsAccessKey`, `notifyEmail`, `fromName` (formulario AYUDA).
- **`levels`**: etapa → niveles → materias → unidades (`id`, `label`, `code`, opcional `intro`, `pdfs`).
- **`sectionTabs`**: id de pestaña, etiqueta y `pdfFile` por defecto.
- **`news`**, **`updates`**, **`legislation`**.
- **`readings`**, **`games`**, **`media`** (Miscelánea).
- **`siteSearchEntries`**, **`contentIndex`** (+ opcional **`contentIndexZones`**).

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

## Pie de página e identidad

- Licencia **Creative Commons BY-NC-SA 4.0**.
- Copyright: **PhD.Eng. Francisco Carnero Rodríguez**, año dinámico y versión en el pie.
- Badge de accesibilidad WCAG (referencia declarada en el pie).

## Documentación relacionada

| Archivo | Contenido |
| --- | --- |
| `github_TIDAhub.md` | Puesta en marcha con Git for Windows, GitHub y Pages |
| `content/README.md` | PDF por unidad didáctica |
| `#_Informe/Informe_MyWeb.tex` | Informe técnico / docente (LaTeX) |

## Próximos pasos habituales

- Completar unidades y PDF en `content/<unitId>/`.
- Ampliar Miscelánea / `contentIndex` / `siteSearchEntries`.
- Mantener `news`, `updates` y `legislation` al día.
- Tras editar, `git add` → `git commit` → `git push` a `main` (Pages se actualiza solo).
