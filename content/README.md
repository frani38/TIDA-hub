# Contenido por unidad (DOCENCIA)

Los materiales de cada unidad didáctica se organizan en los cuatro apartados **Teoría**, **Actividades**, **Prácticas** y **Recursos**, referenciados desde `data.js` (`sectionTabs` y, si aplica, el mapa opcional `unit.pdfs` / rutas de fichero).

**Paradigma actual:** no se trata de subir “apuntes y ejercicios” clásicos en bloque. El material es **más visual y sintético**, centrado en los puntos importantes de cada tema: infografías, pósters, láminas o imágenes de presentación, esquemas y, cuando convenga, PDF. Gran parte puede elaborarse con **aplicaciones de IA**; el criterio editorial sigue siendo del autor del sitio.

Este sitio es estático (GitHub Pages): los ficheros se sirven desde el repositorio. No hace falta backend para descargarlos o abrirlos.

## Ruta en disco

Para una unidad con `id` igual a `unitId`, la carpeta base es:

```text
content/<unitId>/
```

Los nombres por defecto siguen alineados con `pdfFile` / fichero de cada entrada en `sectionTabs` (p. ej. `teoria.pdf`, `actividades.pdf`, …), salvo que la unidad defina rutas propias. En la práctica esos ficheros pueden ser PDF **o** otros formatos servibles (p. ej. PNG/JPG/WebP de una infografía o póster), según lo que referencie `data.js` y acepte la interfaz.

Ejemplo de ruta: `./content/<unitId>/teoria.pdf` (relativo a la raíz del sitio publicado).

## Añadir una unidad nueva

1. Crea el `unitId` (por ejemplo `tei1_up01`) y regístralo en `data.js` dentro de la materia correspondiente.
2. Crea la carpeta `content/<unitId>/`.
3. Añade los materiales de los cuatro apartados (visuales y/o PDF) con los nombres esperados, o configura las rutas en la unidad.
4. Haz commit y `git push` a `main` para que aparezcan en [frani38.github.io/TIDA-hub](https://frani38.github.io/TIDA-hub/).

Si falta un fichero, el enlace en la interfaz puede abrir una URL inexistente hasta que exista el archivo.

## Buenas prácticas

- Prioriza claridad visual y foco en ideas clave frente a documentos densos.
- Evita ficheros enormes si no es necesario (Pages y la carga en el navegador lo notan).
- No subas material con derechos de terceros sin licencia adecuada (el sitio declara uso **CC BY-NC-SA 4.0** en el pie).
- Tras publicar, comprueba la unidad en DOCENCIA con **Ctrl+F5**.

## Nota sobre la interfaz

- En **DOCENCIA**, el panel izquierdo (**Teoría / Actividades / Prácticas / Recursos**) queda fijo al hacer scroll (sticky) en pantallas grandes.
- La URL de una unidad abierta usa hash `#levelId/materialId/unitId` (compatible con el historial atrás/adelante del navegador).

Para la visión general del sitio: `README.md` en la raíz.  
Para publicar en GitHub: `github_TIDAhub.md`.
