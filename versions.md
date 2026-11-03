# Historial de versiones — T·I·D·A hub

Registro de modificaciones y mejoras desde la publicación inicial (**1.0**) hasta la versión actual del pie (`data.js` → `siteMeta.version`, hoy **1.8.9**).

Formato: **MAJOR.MINOR.PATCH** (desde 1.1.0). Fuente de verdad: `data.js`. Documentación alineada en `README.md`, `github_TIDAhub.md`, `content/README.md` e `#_Informe/Informe_MyWeb.tex`.

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

## 1.1.35

- `.gitignore`: exclusiones explícitas para códigos de recuperación 2FA, `.env` y material similar (no versionar secretos de cuenta).

## 1.1.36

- Docs: **Restrict to Domains** de Web3Forms es plan Pro; en free no aplica (honeypot + antispam). Guía `github_TIDAhub.md` alineada en el resto de menciones.

## 1.2.0

- **Responsive + WCAG 2.2 AA:** bajo 1680px el lienzo deja de ser fijo (reflow 1.4.10) para tablet/móvil/zoom; cabecera, INICIO (noticias apiladas), Miscelánea, formularios y pie se adaptan; objetivos táctiles ≥44px.
- ARIA: hub Miscelánea como `<nav>` (sin `role="list"` inválido); `aria-label` de PROYECTOS / Miscelánea alineados con el texto visible.
- Media queries “fantasma” (`min-width: 10000px`) activadas o sustituidas por breakpoints reales.

## 1.2.1

- LEGISLACIÓN en móvil: columnas reales (Nacional completo → Asturias completo); corrige el orden al apilar filas emparejadas del PC.

## 1.2.2

- Privacidad en móvil (AYUDA / `privacidad.html`): deja el ancho fijo 1800px; una columna y texto sin recorte horizontal.

## 1.2.3

- NOVEDADES en móvil: scroll táctil alineado con el resto de secciones (gesto desde cabecera); avisos multilínea sin ellipsis; fecha encima del título.

## 1.2.4

- Cabecera móvil/tablet: menos hueco entre logo y lema; margen claro antes del menú de secciones.

## 1.2.5

- Cabecera móvil: lema alineado a la derecha (como en escritorio).

## 1.2.6

- Pie en móvil/tablet: deja de ser `fixed` (ya no ocupa ~1/3 del viewport); badges más pequeños y meta compacta al final del scroll.

## 1.2.7

- Lema de cabecera: `DIGITALIZACIÓN APLICADA` no se parte (espacio duro); evita que «APLICADA» quede sola en la línea inferior en móvil.

## 1.2.8

- Lema de cabecera en móvil/tablet: una sola línea, tamaño tipográfico adaptado al ancho.

## 1.2.9

- Cabecera móvil: «EDUCACIÓN SECUNDARIA Y BACHILLERATO» con el mismo tamaño tipográfico que el lema superior.

## 1.2.10

- HISTÓRICO de noticias en móvil/tablet: elimina el `min-height` de viewport que dejaba un hueco enorme hasta el pie.

## 1.2.11

- Panel NOTICIAS en móvil: la rejilla interna (`4fr`) ya no estira un vacío hasta el pie; filas `auto`.

## 1.2.12

- Bienvenida en móvil/tablet: tipografía algo menor (párrafos, marca y título BIENVENIDO/A) para no saturar la pantalla.

## 1.2.13

- Cabecera móvil: lema completo sin `…`; la línea de educación un poco más pequeña (proporción similar a escritorio).

## 1.2.14

- Documentación alineada con la línea **1.2.x**: `README.md`, `github_TIDAhub.md`, `content/README.md`, `versions.md` e informe LaTeX local (`#_Informe/Informe_MyWeb.tex`) — layout híbrido, WCAG/reflow, historial `miscId`, Web3Forms Pro/free.

## 1.2.15

- Cabecera móvil/tablet: lema y línea de etapa un poco más pequeños (misma proporción) y `width: max-content` para alinear el borde derecho del lema con `< EDUCACIÓN… >`.

## 1.2.16

- Miscelánea (móvil/tablet): título de sección en una línea, icono más pequeño; fichas de lecturas/media/juegos sin desborde (autores y textos con wrap).

## 1.2.17

- Móvil/tablet: todos los títulos de sección (`#unit-title`) con el mismo tamaño reducido que Bienvenido/a; Miscelánea larga sigue más compacta para una línea.

## 1.2.18

- Corrige especificidad: Bienvenido/a vuelve al tamaño anterior; el resto de títulos usan ese mismo tamaño; botón ← VOLVER en proporción.

## 1.2.19

- Miscelánea móvil/tablet: icono de sección más grande; título + ← VOLVER siempre en la misma línea (VOLVER al margen derecho), también en títulos largos como Lecturas.

## 1.2.20

- Miscelánea: al entrar en un subapartado (p. ej. Lecturas) se resetea el scroll arriba (logo + filtros), sin quedar a mitad de la lista por el scroll del hub.

## 1.2.21

- Avisos EN CONSTRUCCIÓN / PRÓXIMAMENTE: tipografía contenida (`clamp`), sin desborde en móvil; caja con padding y márgenes.

## 1.2.22

- Documentación e informe alineados con **1.2.15–1.2.21**: `README.md`, `github_TIDAhub.md`, `content/README.md`, `versions.md` e `#_Informe/Informe_MyWeb.tex` (Miscelánea móvil, scroll al tope, títulos, placeholders, layout híbrido).

## 1.2.23

- DOCENCIA (móvil/tablet): título de materia/unidad en una sola línea (tipografía más contenida + `nowrap`); Bienvenido/a mantiene el tamaño anterior.

## 1.2.24

- Móvil/tablet: títulos de sección (NOVEDADES, PROYECTOS, LEGISLACIÓN, MISCELÁNEA, SOBRE MÍ, AYUDA, …) al mismo tamaño que Bienvenido/a; la tipografía compacta queda solo para materias/unidades largas de DOCENCIA.

## 1.2.25

- INICIO móvil/tablet: histórico de noticias — al pulsar un año el listado aparece debajo del panel NOTICIAS y se hace scroll hasta él (antes quedaba arriba, fuera de vista).

## 1.2.26

- Histórico de noticias (móvil/tablet): fecha y hora en dos líneas a la izquierda (`DD.MM.YYYY` / `[HH:MM]`) para dar más ancho al titular.

## 1.2.27

- HISTÓRICO (escritorio): el panel NOTICIAS permanece anclado bajo la cabecera (como en INICIO), sin solaparse ni perder el scroll; se resetea al tope al elegir un año.

## 1.2.28

- HISTÓRICO móvil/tablet: se oculta el bloque NOTICIAS (solo título + desplegables por mes); el patrón de fondo del panel queda contenido y no se derrama.

## 1.2.29

- Bienvenida (INICIO): revelado tipo cortina un poco más rápido (~1,55 s).

## 1.2.30

- Noticias, histórico y novedades: fechas visibles en formato `DD.MM.YYYY` (antes `YYYY.MM.DD`).

## 1.2.31

- Bienvenida: la cortina de revelado solo en la primera entrada a la web; al volver a INICIO el texto aparece fijo.

## 1.2.32

- Bienvenida: la cortina se reproduce en cada carga/recarga/ventana nueva; solo queda fija al volver a INICIO tras navegar a otra sección (corrige el falso “ya visto” por doble montaje al arrancar).

## 1.2.33

- Cache-bust tras cambios editoriales en SOBRE MÍ (forzar recarga de `app.js`).

## 1.2.34

- SOBRE MÍ: «entorno Linux» (singular).

## 1.2.35

- Política de privacidad: cita RGPD/LOPDGDD bajo el título (negrita + cursiva, un poco mayor); centrada en AYUDA.

## 1.2.36

- Privacidad: menos espacio entre el título y la cita RGPD/LOPDGDD (pie y AYUDA).

## 1.2.37

- `privacidad.html`: título y cita RGPD/LOPDGDD centrados, mismo estilo que en AYUDA.

## 1.2.38

- INICIO: título BIENVENIDO/A con el mismo padding/margen superior que el resto de secciones.

## 1.2.39

- `privacidad.html`: más aire entre cabecera y título; separación título→RGPD unificada con AYUDA.

## 1.2.40

- Privacidad: más aire bajo cabecera; en AYUDA se anula el `gap` de `.help-form` para igualar título↔RGPD a `privacidad.html`.

## 1.2.41

- SOBRE MÍ: foto actualizada (`image/yo.png`).
- Recarga del navegador: restaura la sección actual (hash / historial) en lugar de forzar INICIO.
- Bienvenida: cortina solo al cargar/recargar INICIO; el botón INICIO ya no la repite.

## 1.2.42

- Privacidad: un poco más de espacio entre el título y la cita RGPD/LOPDGDD (pie y AYUDA).

## 1.2.43

- `privacidad.html` → VOLVER a INICIO: bienvenida fija, sin cortina (como al navegar desde otra sección).

## 1.2.44

- Anti-caché global: `version-boot.js` consulta `data.js` sin caché; si el HTML está desfasado, recarga con `?v=`; enlaces a `privacidad.html` / `index.html` llevan bust de versión.

## 1.2.45

- INICIO: lazo negro temporal como marca de agua detrás del texto de bienvenida (`siteMeta.mourningRibbon`; opacidad baja para no dificultar la lectura).

## 1.2.46

- Cache-bust: lazo negro más grande / menos transparente (el CSS no se veía con `styles.css?v=1.2.45` cacheado).

## 1.2.47

- Noticias no vistas: borde dorado con pulso intermitente (misma cadencia que el nudge de NOVEDADES).

## 1.2.48

- Contenido editorial siempre fresco: `data.js` se inyecta desde descarga sin caché (noticias/libros sin bump de versión ya se ven al recargar).

## 1.2.49

- SOBRE MÍ: elimina la barra de scroll vertical fantasma que desplazaba el texto cuando el contenido ya cabía en pantalla.

## 1.2.50

- Escritorio: la barra de scroll vertical queda en `.app` (zona central), sin solapar cabecera ni pie (NOVEDADES, LEGISLACIÓN, etc.).

## 1.2.51

- Corrige títulos de sección (`#unit-title`) tras el scroll en `.app`: sticky con `top:0` en escritorio (ya no flotan a media altura) y menos recorte de tipografía; en móvil se mantiene el anclaje bajo la cabecera sticky.

## 1.2.52

- Pie en flujo del flex de `body` (no `fixed`): `.app` termina encima del footprint y la barra de scroll vertical ya no pasa por detrás en ninguna sección.

## 1.2.53

- Quita el `padding-top` de `.app` que separaba NOTICIAS (INICIO) y la barra SELECCIONA… (DOCENCIA) de la cabecera; vuelven pegados como antes.

## 1.3.0

- SOBRE MÍ: «mundo académico» enlaza a un listado de publicaciones académicas (datos en `data.js` / `publications/publications.txt`) con botón ← VOLVER a la biografía.

## 1.3.1

- Publicaciones académicas: títulos con DOI online enlazan al documento original (Applied Thermal Engineering y Journal of Mathematical Chemistry); el resto sin URL pública localizable queda como texto.

## 1.3.2

- Publicaciones: título en negrita; el hipervínculo pasa a la referencia (venue). GeoEner 2012 apunta a la ficha ISBN detalle (`sidTitul=1932822`); el ISBN del congreso 2011 no tiene ficha en el catálogo del Ministerio.

## 1.3.3

- SOBRE MÍ: «AYUDA» en el último párrafo enlaza a la sección AYUDA del sitio.

## 1.3.4

- SOBRE MÍ / PUBLICACIONES (móvil/tablet): título + ← VOLVER en una sola línea compacta, mismo criterio que MISCELÁNEA / detalle.

## 1.3.5

- SOBRE MÍ / PUBLICACIONES: al entrar (y al volver a la biografía) se reinicia el scroll al inicio en móvil/tablet.

## 1.4.0

- Layout: en PC el lienzo de escritorio (1680px) se mantiene al redimensionar la ventana; aparecen scroll horizontal/vertical en lugar de pasar a layout móvil/tablet.
- El reflow compacto solo se activa en dispositivos táctiles (`hover: none` + `pointer: coarse`) con viewport estrecho.

## 1.4.1

- PC ventana &lt; 1680px: scroll H+V en el viewport (`html`); la barra vertical queda fija al borde derecho (desde cabecera hasta el pie, contactando con la horizontal) y no se desplaza con el lienzo al hacer scroll horizontal.

## 1.4.2

- PC estrecho: la barra vertical del viewport vuelve a mostrarse (antes la anulaban las reglas `html:has`/`body:has` de INICIO); se aplica a todo `&lt;1680px` y el táctil lo sobrescribe; `overflow-y: scroll` fija el carril al borde derecho.

## 1.4.3

- Móvil/tablet: en política de privacidad desde AYUDA, ← VOLVER al margen derecho en la misma línea que el título (como Miscelánea/Lecturas), manteniendo el tamaño grande de «AYUDA».

## 1.4.4

- AYUDA → política de privacidad: al entrar se reinicia el scroll al inicio (cabecera), no a mitad del texto.

## 1.5.0

- PC: si el viewport CSS es &lt; 1680px (p. ej. 1920×1080 con escala del sistema 125% ≈ 1536px), el lienzo de escritorio se encaja automáticamente (`site-desktop-fit` / `zoom`) para verse completo, sin cortar NOTICIAS ni pasar a layout móvil/tablet.

## 1.5.1

- Documentación alineada con **1.4.x–1.5.0**: `README.md`, `github_TIDAhub.md`, `content/README.md`, `versions.md` e informe LaTeX local (`#_Informe/Informe_MyWeb.tex`) — layout PC vs táctil, encaje `site-desktop-fit`, privacidad/AYUDA móvil, publicaciones, `version-boot.js`.
- *(Último bump motivado solo por docs bajo la política anterior; a partir de aquí docs/reglas puras ya no generan número nuevo.)*

### Nota de política (sin versión nueva)

- Documentación del repo e informe, y cambios solo en `.cursor/rules`, se publican con commit/push **sin** incrementar `siteMeta.version`. El pie refleja cambios de la web (código/UI/assets), no de la documentación.

## 1.6.0

- Miscelánea → **SOFT SKILLS**: catálogo de 8 fichas (comunicación, equipo, pensamiento crítico, tiempo, conflictos, feedback, autonomía, exposición) con intro, tips alumnado/docente y filtro por contexto; datos en `data.js` → `softSkills`.

## 1.6.1

- Soft Skills reorientado a cualquier perfil tech del s. XXI: definición operativa + ejemplos (sin split alumnado/docente); fichas visuales en `softskills/` e ilustración en cada tarjeta.

## 1.6.2

- Miscelánea: el icono del subapartado vuelve a mostrarse al recargar o entrar por historial/hash (ya no queda oculto por la clase de la animación de vuelo).

## 1.6.3

- Soft Skills: intro a ancho completo del área de contenido; tipografía Orbitron en textos de la sección; ilustraciones con algo más de brillo.

## 1.6.4

- Soft Skills: nuevas ilustraciones más coloridas; títulos en mayúsculas; palabras clave de la intro en negrita.

## 1.6.5

- Soft Skills: en la ficha «Exposición de proyectos», el presentador de la ilustración pasa a ser un hombre (mismo estilo y escena).

## 1.6.6

- Soft Skills: definiciones más extensas; ejemplos en dos columnas (entorno académico / mundo laboral) con estilos diferenciados.

## 1.6.7

- Soft Skills: quitar frase final de la intro; suavizar saturación/brillo de las ilustraciones para alinearlas con la paleta del sitio.

## 1.6.8

- Soft Skills: quitar velo azul de imágenes (solo atenuar color original); tags de contexto arriba a la derecha; columnas académico/laboral desplegables con flecha; sin rótulo «Ejemplos».

## 1.6.9

- Soft Skills: subir brillo y contraste de las ilustraciones (sin recuperar saturación fuerte).

## 1.6.10

- Soft Skills: eliminar filtro/tags de contexto; ejemplos académicos centrados en tareas reales de estudio; texto justificado en ejemplos; imagen de exposición con `contain` (no llena el recuadro).

## 1.7.0

- Soft Skills: definiciones alineadas con WEF Future of Jobs 2025, DigComp 2.2 y UNESCO AI CFS; nuevas fichas (uso ético de IA, adaptabilidad/resiliencia, curiosidad/aprendizaje continuo); bloque de referencias; ilustraciones nuevas.

## 1.7.1

- Soft Skills: entradas automáticas en NOVEDADES (`SOFT SKILL: …`) con enlace a la ficha; aviso luminoso al añadir o editar contenido (huella de texto + `updatedAt`).

## 1.7.2

- Soft Skills: exposición a full-bleed (sin contain/reborde); nuevas ilustraciones de IA, adaptabilidad y aprendizaje alineadas al estilo/color del resto.

## 1.7.3

- Soft Skills: regenerar las 11 ilustraciones con escenas distintas y acordes a cada competencia (sin repetición visual).

## 1.7.4

- Soft Skills: NOVEDADES pasa a un aviso de sección `Soft Skills: …` vía `changelog` (ya no una entrada por ficha).

## 1.8.0

- Soft Skills: ilustraciones técnicas/cibernéticas (azul/cian/verde); filtro lateral por dominio preciso (cognición, colaboración, comunicación, autogestión, digital) con tags en ficha.

## 1.8.1

- Soft Skills: ilustraciones más claras y simples; título con fondo azul oscuro y texto blanco; columnas «Ejemplos · …»; 4 ejemplos revisados por columna; una sola entrada en NOVEDADES.

## 1.8.2

- Soft Skills: dominio entre corchetes en el título (azul claro, sin fondo de tag); paleta de ilustraciones más equilibrada; lupa/anillo de pensamiento crítico corregido.

## 1.8.3

- Soft Skills: tags a la derecha y más pequeños; recuperar ilustraciones 1.8.1 con color reforzado (crítico corregido); más palabras clave en negrita en definiciones.

## 1.8.4

- Soft Skills: tag dentro de la barra azul del título (derecha); homogeneizar brillo/contraste/saturación de todas las ilustraciones.

## 1.8.5

- Soft Skills: misma composición con paleta cálida/natural (sin lavado cian); brillo y contraste unificados en las 11 fichas.

## 1.8.6

- Soft Skills: tags en azul más claro; ilustraciones sin filtros CSS, más luminosas y con color natural (mismo diseño).

## 1.8.7

- Soft Skills: colores más vivos y contraste equilibrado para que todos los elementos se lean bien (sin lavado).

## 1.8.8

- Soft Skills: reset de las 11 fichas — misma composición, colores naturales/realistas sin tinte ni filtros (p. ej. bombilla cálida, no verde).

## 1.8.9

- Soft Skills: tags sin corchetes (solo la palabra del dominio).

## 1.8.10

- Soft Skills: ampliar el dibujo de la ficha Adaptabilidad y resiliencia.

## 1.8.11

- Soft Skills: Adaptabilidad mantiene el acercamiento del dibujo con el mismo tamaño de recuadro que el resto.

## 1.8.12

- Soft Skills: título REFERENCIAS más grande; logos WEF/EC/UNESCO delante de cada enlace, mismo alto.

## 1.8.13

- Soft Skills: logo WEF actualizado; iconos de referencias al doble de alto; textos de enlace alineados.

## 1.8.14

- Soft Skills: logo UNESCO actualizado; logos ×2 a la derecha de REFERENCIAS; enlaces alineados.

## 1.8.15

- Soft Skills: logos algo menores y centrados; WEF sin damero; bloque de logos más abajo que REFERENCIAS.

## 1.8.16

- Soft Skills: logos y enlaces de referencias más a la izquierda (hacia la mitad de REFERENCIAS).

## 1.8.17

- Soft Skills: definiciones ampliadas; desplegables de ejemplos anclados a la base de la imagen.

## 1.8.18

- INICIO: se retira el lazo de luto (marca de agua).

## 1.8.19

- Soft Skills: menos espacio vertical entre filas de Referencias.

## 1.8.20

- Soft Skills: enlaces de Referencias sin subrayado y en azul de acento.

## 1.8.21

- Hipervínculos de texto azul: subrayado siempre visible en toda la web.

## 1.8.22

- Hipervínculos de texto azul: subrayado solo al pasar el ratón.

---

## Convención (recordatorio)

| Dígito | Uso |
| --- | --- |
| **MAJOR** | Cambios considerables / hitos grandes |
| **MINOR** | Funcionalidad nueva acotada o mejora relevante de UX |
| **PATCH** | Cambios técnicos pequeños de la web (código, estilos, fixes) |

**Versionar solo cambios de la web.** Sin bumpear: contenido editorial (libros, juegos, media, noticias, legislación, materiales de `content/`/`books/`, etc.) y documentación/reglas puras (`README`, `github_TIDAhub`, `versions`, informe, `.cursor/rules`, …).

Nota: **1.1.16** y **1.1.17** fueron bumps por contenido; **1.5.1** fue el último bump solo por docs. Esos casos ya no generan número nuevo.

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
| **1.1.35** | `.gitignore`: secretos de cuenta / recovery codes |
| **1.1.36** | Docs: Restrict to Domains Web3Forms = Pro |
| **1.2.0** | Responsive tablet/móvil + correcciones WCAG 2.2 AA |
| **1.2.1** | LEGISLACIÓN móvil: orden Nacional → Asturias |
| **1.2.2** | Privacidad móvil: una columna, sin recorte |
| **1.2.3** | NOVEDADES móvil: scroll + avisos legibles |
| **1.2.4** | Cabecera móvil: espaciado logo / lema / menú |
| **1.2.5** | Cabecera móvil: lema a la derecha |
| **1.2.6** | Pie móvil: no fijo; más compacto |
| **1.2.7** | Lema: DIGITALIZACIÓN APLICADA sin partir |
| **1.2.8** | Lema móvil: una línea con tamaño adaptativo |
| **1.2.9** | Cabecera móvil: lema y etapa al mismo tamaño |
| **1.2.10** | HISTÓRICO móvil: sin hueco vacío hasta el pie |
| **1.2.11** | Panel noticias móvil: sin estirar vacío |
| **1.2.12** | Bienvenida móvil: tipografía más contenida |
| **1.2.13** | Cabecera móvil: lema completo; etapa más pequeña |
| **1.2.14** | Docs e informe alineados con responsive 1.2.x |
| **1.2.15** | Cabecera móvil: lema/etapa más contenidos y alineados |
| **1.2.16** | Miscelánea móvil: título/icono y fichas sin desborde |
| **1.2.17** | Móvil: títulos de sección al tamaño de Bienvenido/a |
| **1.2.18** | Restaura tamaño Bienvenido/a; VOLVER en proporción |
| **1.2.19** | Miscelánea móvil: icono mayor; VOLVER en la línea del título |
| **1.2.20** | Miscelánea: scroll al tope al abrir subapartado |
| **1.2.21** | Avisos EN CONSTRUCCIÓN / PRÓXIMAMENTE adaptados a móvil |
| **1.2.22** | Docs e informe alineados con pulido móvil 1.2.15–21 |
| **1.2.23** | DOCENCIA móvil: título de materia en una línea |
| **1.2.24** | Títulos de sección = tamaño Bienvenido/a |
| **1.2.25** | Histórico noticias móvil: listado visible tras pulsar año |
| **1.2.26** | Histórico móvil: fecha y hora apiladas a la izquierda |
| **1.2.27** | HISTÓRICO escritorio: panel NOTICIAS anclado como en INICIO |
| **1.2.28** | HISTÓRICO móvil: sin bloque NOTICIAS; fondo contenido |
| **1.2.29** | Bienvenida: revelado un poco más rápido |
| **1.2.30** | Fechas UI: DD.MM.YYYY en noticias/novedades |
| **1.2.31** | Bienvenida: cortina solo en la 1.ª entrada |
| **1.2.32** | Bienvenida: cortina en cada carga; fija solo al volver |
| **1.2.33** | Cache-bust: SOBRE MÍ (texto en app.js) |
| **1.2.34** | SOBRE MÍ: entorno Linux (singular) |
| **1.2.35** | Privacidad: cita legal bajo el título |
| **1.2.36** | Privacidad: título y cita más juntos |
| **1.2.37** | privacidad.html: título/cita como en AYUDA |
| **1.2.38** | INICIO: título alineado con otras secciones |
| **1.2.39** | Privacidad: aire cabecera + gap RGPD = AYUDA |
| **1.2.40** | Privacidad AYUDA: sin gap flex; más aire cabecera |
| **1.2.41** | Foto SOBRE MÍ; restore al recargar; cortina solo en load |
| **1.2.42** | Privacidad: más espacio título ↔ RGPD |
| **1.2.43** | VOLVER desde privacidad.html: INICIO sin cortina |
| **1.2.44** | version-boot: forzar HTML/assets a la versión publicada |
| **1.2.45** | INICIO: lazo negro marca de agua (temporal) |
| **1.2.46** | Cache-bust CSS lazo negro (tamaño/opacidad) |
| **1.2.47** | Noticias: pulso dorado como nudge de NOVEDADES |
| **1.2.48** | data.js sin caché: contenido visible sin bump |
| **1.2.49** | SOBRE MÍ: sin barra de scroll fantasma |
| **1.2.50** | Scroll vertical solo entre cabecera y pie |
| **1.2.51** | Títulos de sección: sticky correcto con scroll en `.app` |
| **1.2.52** | Scroll vertical sin atravesar el pie (footer en flex) |
| **1.2.53** | INICIO/DOCENCIA otra vez pegados a la cabecera |
| **1.3.0** | SOBRE MÍ: enlace a publicaciones académicas |
| **1.3.1** | Publicaciones: hipervínculos DOI cuando hay versión online |
| **1.3.2** | Publicaciones: negrita en título; enlace en venue; ficha GeoEner |
| **1.3.3** | SOBRE MÍ: enlace AYUDA → sección AYUDA |
| **1.3.4** | PUBLICACIONES móvil: título y VOLVER en una línea |
| **1.3.5** | PUBLICACIONES: scroll al top al abrir en móvil |
| **1.4.0** | PC: escritorio fijo al redimensionar; reflow solo táctil |
| **1.4.1** | PC estrecho: barra vertical fija al borde derecho del viewport |
| **1.4.2** | PC estrecho: barra V del viewport ya no la anulan las reglas :has |
| **1.4.3** | AYUDA/privacidad móvil: VOLVER como Miscelánea; título sin reducir |
| **1.4.4** | AYUDA → privacidad: scroll al top al abrir |
| **1.5.0** | PC: encaje automático del lienzo 1680 al viewport CSS estrecho |
| **1.5.1** | Docs/informe alineados con layout 1.4.x–1.5.0 (último bump solo-docs) |
| **1.6.0** | Soft Skills: fichas visuales + filtro por contexto |
| **1.6.1** | Soft Skills: definición+ejemplos universales e ilustraciones |
| **1.6.2** | Miscelánea: icono visible tras recarga/historial |
| **1.6.3** | Soft Skills: intro a ancho completo, Orbitron y brillo |
| **1.6.4** | Soft Skills: ilustraciones coloridas, títulos MAYÚSCULAS, intro en negrita |
| **1.6.5** | Soft Skills: presentador hombre en ficha de exposición |
| **1.6.6** | Soft Skills: definiciones amplias + ejemplos académico/laboral |
| **1.6.7** | Soft Skills: intro sin cierre meta; ilustraciones más suaves |
| **1.6.8** | Soft Skills: imagen sin tinte, tags arriba-dcha, ejemplos desplegables |
| **1.6.9** | Soft Skills: ilustraciones con más brillo y contraste |
| **1.6.10** | Soft Skills: sin contextos; ejemplos estudio real; exposición contain |
| **1.7.0** | Soft Skills: marcos WEF/DigComp/UNESCO + IA ética y 2 fichas nuevas |
| **1.7.1** | Soft Skills → NOVEDADES automáticas + aviso luminoso al actualizar |
| **1.7.2** | Soft Skills: exposición full-bleed + 3 ilustraciones estilo unificado |
| **1.7.3** | Soft Skills: 11 ilustraciones nuevas, únicas y temáticas |
| **1.7.4** | Soft Skills: aviso único de sección en NOVEDADES |
| **1.8.0** | Soft Skills: estilo cibernético + filtro por dominio |
| **1.8.1** | Soft Skills: imágenes claras, títulos, ejemplos×4, 1 novedad |
| **1.8.2** | Soft Skills: tags en título, paleta y pensamiento crítico |
| **1.8.3** | Soft Skills: tags dcha, imágenes 1.8.1+color, más negritas |
| **1.8.4** | Soft Skills: tag en barra azul; ilustraciones homogeneizadas |
| **1.8.5** | Soft Skills: paleta natural unificada, sin tono azul excesivo |
| **1.8.6** | Soft Skills: tags azul claro; imágenes naturales sin filtros |
| **1.8.7** | Soft Skills: colores vivos y contraste legible en fichas |
| **1.8.8** | Soft Skills: reset colores naturales realistas sin filtros |
| **1.8.9** | Soft Skills: tags sin corchetes |
| **1.8.10** | Soft Skills: dibujo mayor en Adaptabilidad |
| **1.8.11** | Soft Skills: Adaptabilidad, mismo tamaño de recuadro |
| **1.8.12** | Soft Skills: REFERENCIAS + logos WEF/EC/UNESCO |
| **1.8.13** | Soft Skills: WEF nuevo, logos ×2, textos alineados |
| **1.8.14** | Soft Skills: UNESCO nuevo; logos a la dcha. de REFERENCIAS |
| **1.8.15** | Soft Skills: logos centrados/menores; WEF transparente |
| **1.8.16** | Soft Skills: referencias más a la izquierda |
| **1.8.17** | Soft Skills: más texto; ejemplos alineados con imagen |
| **1.8.18** | INICIO: sin lazo de luto |
| **1.8.19** | Soft Skills: referencias más juntas |
| **1.8.20** | Soft Skills: enlaces refs en azul de acento |
| **1.8.21** | Subrayado en hipervínculos de texto azul |
| **1.8.22** | Subrayado de enlaces azules solo en hover |
