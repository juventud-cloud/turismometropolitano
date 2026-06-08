# Mapa Turístico Metropolitano

Portal web público e interactivo del Ente Metropolitano Córdoba para visualizar eventos, atractivos y experiencias turísticas de la región metropolitana.

## Archivos

- `index.html`: portal web listo para publicar en GitHub Pages.
- `scripts/apps_script_mapa_turistico.gs`: script para conectar Google Sheets con el portal mediante JSON.

## Antes de publicar

En `index.html`, buscar y completar:

```js
DATA_ENDPOINT: "PEGAR_URL_ACA",
GOOGLE_MAPS_API_KEY: "PEGAR_API_KEY_ACA",
```

`DATA_ENDPOINT` es la URL `/exec` del Apps Script publicado como aplicación web.

`GOOGLE_MAPS_API_KEY` es la clave de Google Maps JavaScript API. Conviene restringirla al dominio donde se publique el portal.

## Publicación en GitHub Pages

1. Crear un repositorio en GitHub.
2. Cargar `index.html`, `README.md` y la carpeta `scripts`.
3. Ir a Settings > Pages.
4. En Source, seleccionar `Deploy from a branch`.
5. Elegir la rama `main` y la carpeta `/root`.
6. Guardar.
7. GitHub generará una URL pública del sitio.

## Nota

El portal no requiere cargar imágenes del logo por separado: el logo oficial del Ente está embebido dentro del HTML.
