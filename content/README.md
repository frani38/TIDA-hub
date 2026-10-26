# Contenido por unidad (PDF)

Los materiales de cada unidad didáctica son archivos **PDF** referenciados desde `data.js` (`sectionTabs` y, si aplica, el mapa opcional `unit.pdfs`).

Este sitio es estático (GitHub Pages): los PDF se sirven como archivos del repositorio. No hace falta backend para descargarlos.

## Ruta en disco

Para una unidad con `id` igual a `unitId`, los archivos por defecto se colocan en:

```text
content/<unitId>/teoria.pdf
content/<unitId>/actividades.pdf
content/<unitId>/practicas.pdf
content/<unitId>/recursos.pdf
```

Los nombres deben coincidir con `pdfFile` de cada entrada en `sectionTabs`, salvo que la unidad defina `pdfs` para usar otros nombres.

Ejemplo de rutas en el código: `./content/<unitId>/teoria.pdf` (relativo a la raíz del sitio publicado).

## Añadir una unidad nueva

1. Crea el `unitId` (por ejemplo `tei1_up01`) y regístralo en `data.js` dentro de la materia correspondiente.
2. Crea la carpeta `content/<unitId>/`.
3. Copia los PDF con los nombres esperados (o configura `pdfs` en la unidad).
4. Haz commit y `git push` a `main` para que aparezcan en [frani38.github.io/TIDA-hub](https://frani38.github.io/TIDA-hub/).

Si falta un PDF, el enlace en la interfaz puede abrir una URL inexistente hasta que exista el archivo.

## Buenas prácticas

- Evita PDF enormes si no es necesario (Pages y la carga en el navegador lo notan).
- No subas material con derechos de terceros sin licencia adecuada (el sitio declara uso **CC BY-NC-SA 4.0** en el pie).
- Tras publicar, comprueba la unidad en DOCENCIA con **Ctrl+F5**.

## Nota sobre la interfaz

- En **DOCENCIA**, el panel izquierdo (**Teoría / Actividades / Prácticas / Recursos**) queda fijo al hacer scroll (sticky) en pantallas grandes.
- La URL de una unidad abierta usa hash `#levelId/materialId/unitId` (compatible con el historial atrás/adelante del navegador).

Para la visión general del sitio: `README.md` en la raíz.  
Para publicar en GitHub: `github_TIDAhub.md`.
