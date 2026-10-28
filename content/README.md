# Contenido por unidad (DOCENCIA)

## Idea de la sección

En **DOCENCIA** la navegación sigue siendo **etapa → nivel → materia → unidad**, con los cuatro apartados fijos:

| Apartado | Rol (enfoque actual) |
| --- | --- |
| **Teoría** | Ideas clave del tema en formato visual/sintético |
| **Actividades** | Piezas para trabajar/aplicar lo esencial (no “cuadernillo” clásico) |
| **Prácticas** | Guías o láminas de taller / procedimiento / reto |
| **Recursos** | Material de apoyo (esquemas, pósters, enlaces empaquetados, etc.) |

**Cambio de paradigma:** ya no se plantea subir de forma sistemática apuntes y ejercicios en PDF “al uso”. El material es **recursivo y visual**, centrado en los **puntos más importantes** de cada tema. Puede elaborarse con **aplicaciones de IA** (infografías, pósters, láminas o capturas de presentación, esquemas). El PDF sigue siendo válido cuando aporte, pero no es el formato por defecto obligatorio.

Referencia en datos: `data.js` → `sectionTabs` y, si aplica, rutas por unidad (`pdfs` / ficheros). Criterio editorial: del autor del sitio.

Sitio estático (GitHub Pages): los ficheros viven en el repositorio; no hace falta backend. Alta o cambio de material de unidad = **contenido editorial** (commit/push **sin** bumpear `siteMeta.version`, salvo que el mismo cambio toque código/UI).

## Ruta en disco

Para una unidad con `id` = `unitId`:

```text
content/<unitId>/
```

Los nombres por defecto se alinean con `sectionTabs` (p. ej. `teoria.pdf`, `actividades.pdf`, …), salvo rutas propias en la unidad. En la práctica pueden ser **PDF** u otros formatos servibles (**PNG / JPG / WebP**, etc.) según lo que referencie `data.js` y acepte la interfaz.

Ejemplo: `./content/<unitId>/teoria.pdf` (relativo a la raíz del sitio).

## Añadir una unidad nueva

1. Crea el `unitId` (p. ej. `tei1_up01`) y regístralo en `data.js` dentro de la materia.
2. Crea `content/<unitId>/`.
3. Añade piezas de los cuatro apartados (preferible visual/sintético; PDF si aporta) o configura rutas en la unidad.
4. `git commit` + `git push` a `main` → [frani38.github.io/TIDA-hub](https://frani38.github.io/TIDA-hub/).

Si falta un fichero, el enlace puede abrir una URL inexistente hasta que exista.

## Buenas prácticas

- Prioriza **claridad visual** e ideas clave frente a documentos densos.
- Evita ficheros enormes (Pages y el navegador lo notan); comprime imágenes antes de subirlas.
- Respeta derechos de terceros; el sitio declara **CC BY-NC-SA 4.0**.
- Tras publicar, comprueba la unidad en DOCENCIA con **Ctrl+F5** (la primera vez tras un bump de assets).

## Nota sobre la interfaz

- Panel **Teoría / Actividades / Prácticas / Recursos**: sticky en pantallas grandes; en anchos estrechos (&lt;1680px) el layout hace reflow junto al resto del sitio.
- URL de unidad: `#levelId/materialId/unitId` (historial atrás/adelante).
- Iconos de apartados: `icons/` (caché ligada a la versión del sitio).
- Selector etapa/nivel/materia/unidad: grid 4 → 2 → 1 columnas según el ancho (WCAG reflow).

## Relación con otras carpetas de medios

| Carpeta | Uso |
| --- | --- |
| `content/<unitId>/` | Materiales DOCENCIA por unidad |
| `books/` | Portadas de **Lecturas** (Miscelánea) |
| `icons/` | Iconos de hub Miscelánea / DOCENCIA |
| `banners/`, `image/`, `logo/` | Identidad y decoración |

Visión general: `README.md`. Publicación: `github_TIDAhub.md`. Historial: `versions.md`.
