# Contenido por unidad (PDF)

Los materiales de cada unidad didáctica son archivos **PDF** referenciados desde `data.js` (`sectionTabs` y, si aplica, el mapa opcional `unit.pdfs`).

## Ruta en disco

Para una unidad con `id` igual a `unitId`, los archivos por defecto se colocan en:

```text
content/<unitId>/teoria.pdf
content/<unitId>/actividades.pdf
content/<unitId>/practicas.pdf
content/<unitId>/recursos.pdf
```

Los nombres deben coincidir con `pdfFile` de cada entrada en `sectionTabs`, salvo que la unidad defina `pdfs` para usar otros nombres.

## Añadir una unidad nueva

1. Crea el `unitId` (por ejemplo `tei1_up01`) y regístralo en `data.js` dentro de la materia correspondiente.
2. Crea la carpeta `content/<unitId>/`.
3. Copia los PDF con los nombres esperados (o configura `pdfs` en la unidad).

Si falta un PDF, el enlace en la interfaz puede abrir una URL inexistente hasta que exista el archivo.

## Nota sobre la interfaz

- En la vista **DOCENCIA**, el panel izquierdo con **Teoría / Actividades / Prácticas / Recursos** queda fijo al hacer scroll (sticky) en pantallas grandes para facilitar la navegación por descargas.

Para una visión general del sitio, consulta el `README.md` en la raíz del proyecto.
