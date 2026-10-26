# MyWeb (T·I·D·Ahub)

Sitio web estático para organizar y publicar materiales de **Tecnología, Ingeniería y Digitalización Aplicada** (ESO y Bachillerato), con navegación **etapa → nivel → materia → unidad** y secciones de apoyo (noticias, legislación, ayuda, etc.).

## Objetivo del proyecto

- **DOCENCIA**: selectores de etapa, nivel, materia y unidad; en cada unidad, pestañas **Teoría**, **Actividades**, **Prácticas** y **Recursos** enlazadas a PDF en `/content/<unitId>/`.
- **INICIO**: bienvenida y bloque de **noticias** (datos en `data.js` → `news`).
- **NOVEDADES**: listado de avisos/mejoras de la web (datos en `data.js` → `updates`), accesible desde la cabecera.
- **Búsqueda rápida** (cabecera): formulario **BUSCAR** o **Enter**; resultados globales (docencia, noticias, legislación, entradas indexadas en `data.js`), sin duplicar enlaces genéricos del menú.
- **LEGISLACIÓN**, **PROYECTOS**, **MISCELÁNEA**: vistas según `data.js` (p. ej. `legislation`, `contentIndex`).
- **SOBRE MÍ**: texto biográfico e imagen en `./image/` (p. ej. `yo.png`), definidos en `app.js`.
- **AYUDA**: formulario de contacto y acceso integrado a la política de privacidad; envío mediante `mailto:`.
- **privacidad.html**: política en página autónoma (misma hoja de estilos).
- Tipografía **Orbitron / Oxanium** y cabecera tipo banner.

No usa framework ni paso de compilación.

## Tecnologías

- HTML5 (`index.html`, `privacidad.html`)
- CSS3 (`styles.css`)
- JavaScript en el cliente (`app.js`, `data.js` expuesto como `window.MYWEB_DATA`)

## Estructura de carpetas (resumen)

```text
MyWeb/
├── index.html
├── privacidad.html
├── styles.css
├── app.js
├── data.js
├── README.md
├── image/           # p. ej. retrato SOBRE MÍ
├── banners/
├── icons/
├── logo/
├── assets/
└── content/
    └── <unitId>/
        ├── teoria.pdf
        ├── actividades.pdf
        ├── practicas.pdf
        └── recursos.pdf
```

Detalle de PDF por unidad: `content/README.md`.

## Ejecución en local

Abrir `index.html` directamente puede funcionar; es preferible un servidor HTTP local (caché y rutas más coherentes):

- Extensión Live Server (VS Code / Cursor)
- `python -m http.server 8000` y luego `http://localhost:8000`

## Configuración en `data.js`

- **`levels`**: etapa → niveles → materias → unidades (`id`, `label`, `code`, opcional `intro`, `pdfs`).
- **`sectionTabs`**: id de pestaña, etiqueta y `pdfFile` por defecto.
- **`news`**: noticias de portada (`publishedAt`, `title`, `text`, `url` opcional).
- **`updates`**: avisos/mejoras (`publishedAt`, `title`, `text` opcional).
- **`legislation`**: bloques nacional / Asturias con ítems enlazados.
- **`siteSearchEntries`**: filas manuales para la búsqueda rápida (`haystack`, `navTarget`, etc.).
- **`contentIndex`** (+ opcional **`contentIndexZones`**): ítems por zona (`misc`, `books`, `about`, `help`).

## Comportamiento destacado

- En **DOCENCIA**, al abrir una unidad se actualiza el **hash** de la URL: `#levelId/materialId/unitId` para compartir o restaurar la vista (junto con estado en `localStorage`).
- En **DOCENCIA**, el panel izquierdo con **Teoría / Actividades / Prácticas / Recursos** queda **fijo** al hacer scroll (sticky) en pantallas grandes.
- La búsqueda en barra de DOCENCIA filtra unidades cuando el menú está visible; la búsqueda global usa el formulario de cabecera.
- Tema visual fijado a **claro** (`theme-light` en el HTML).
- Fechas mostradas con puntos: `YYYY.MM.DD` (y `YYYY.MM.DD [HH:mm]` cuando aplica).
- En **INICIO** y **NOVEDADES**, los listados se agrupan por **mes** en bloques plegables/desplegables.

## Indicador de novedades nuevas

- Si hay una entrada nueva en `updates` (se compara un **hash del último elemento**), el botón **NOVEDADES** muestra un **resplandor azul**.
- Al volver a **INICIO** con novedades sin leer, el botón hace un **parpadeo** durante ~10s.
- Al entrar en **NOVEDADES**, se marca como visto y el indicador se apaga.
- Caducidad: si la última novedad tiene más de 14 días, no se muestra el aviso.

## AYUDA y privacidad

- Formulario con nombre, correo, asunto, descripción y dos consentimientos obligatorios.
- Enlace a privacidad abre el panel en la misma ventana sin perder el borrador del formulario.
- Política completa también en **`privacidad.html`**.

## Miscelánea

- Animación de transición del icono del menú a la vista detalle (icono fijo a la izquierda).
- Alineación del icono fijo con el título de la sección y ajuste para evitar parpadeos durante la animación.

## Pie de página e identidad

- Licencia **Creative Commons BY-NC-SA 4.0** (enlace en el pie).
- Copyright: **PhD.Eng. Francisco Carnero Rodríguez**, año dinámico y versión mostrada en el pie.

## Próximos pasos habituales

- Completar unidades y PDF en `content/<unitId>/`.
- Añadir entradas en `siteSearchEntries` o `contentIndex` cuando haya nuevas páginas indexables.
- Mantener `news` y `legislation` al día según necesidad.
