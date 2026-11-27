# Turismo Metropolitano V4.1 — demostración local

## Abrir y probar
1. Descomprimir el ZIP completo. Abrir la carpeta que contiene `index.html` en VS Code.
2. Usar Live Server (clic derecho en index.html > Open with Live Server), o `python -m http.server 8000` y abrir http://localhost:8000/.
3. Abrir el portal y el administrador desde el mismo origen. En el footer: Acceso institucional. Elegir un perfil de demostración, sin credenciales reales.
4. GitHub Pages: subir el contenido del ZIP con index.html en la raíz. Probar preferentemente en una rama o repositorio separado antes de reemplazar producción.

## Novedades
- Agenda de 15 días (hoy + 14 días), hoy, fin de semana, 7 días, fecha personalizada y vista extendida de un año. Los atractivos permanentes no dependen de fechas.
- Programación única, diaria, semanal o mensual (mismo día del mes). Excepciones por edición, estados de disponibilidad y cambio de fecha; estado editorial independiente. El cambio desde una fecha divide la serie en dos. Revisar las ediciones futuras y las fechas reprogramadas antes de producción.
- Modo Senderos en el mismo explorador (`?modo=senderos`), filtros de dificultad, distancia, duración y estado. Ficha especializada, trazados GPX o dibujo de puntos sobre mapa Leaflet. El acceso se confirma aparte. No se incluyen trazados reales inventados; la ficha Tres Cascadas es una muestra pendiente de validación. La edición de trazados usa dibujo nativo Leaflet, no Geoman Free; la integración de este plugin queda pendiente.
- Circuitos municipales de hasta cinco paradas reutilizables. Las paradas de eventos recurrentes se resuelven a una edición disponible del período por defecto.
- Google Maps: URL con origen, destino y hasta tres puntos intermedios; coordenadas confirmadas o búsqueda por nombre/dirección/localidad. Excluye paradas no disponibles y senderos sin acceso confirmado con confirmación previa. Revisar los destinos sugeridos y la compatibilidad móvil. No genera navegación de trekking.
- Flyer opcional separado de fotografías, miniatura completa y ampliación. Aviso si el evento se reprogramó y necesita revisar la pieza.
- Editor: Leaflet con cartografía OSM, búsqueda explícita de direcciones Georef Argentina, pegado de coordenadas o enlaces Google Maps con coordenadas del punto explícitas (no links cortos), banco de lugares verificados por municipio. Coordenadas avanzadas plegables. En ausencia de mapa no permite dibujar sobre un esquema falso.

## Entrega y límites
Prototipo estático, NO administración de producción. No contiene autenticación real, servidor, API privada, almacenamiento compartido ni protección efectiva de roles. Cambios e imágenes viven en localStorage y están limitados por la cuota del navegador; se mantiene la clave V4 para conservar registros locales, agregando campos nuevos sin borrar el histórico. Respaldar desde Configuración antes de actualizar. La versión inicial usa una muestra de la planilla auditada y la identidad gráfica anterior; faltan fotografías y fuentes oficiales, validación de lugares, senderos y catálogo completo. No contiene claves ni fuentes tipográficas redistribuidas.

La instalación definitiva requiere que el proveedor informe capacidades de hosting, base de datos, PHP u otro runtime compatible, almacenamiento, HTTPS, backups, accesos y política de actualización. La entrega final por Drive deberá incluir código, migraciones, instrucciones y pruebas de producción. Este ZIP todavía no es ese paquete definitivo. Los servicios externos requieren internet; Leaflet se carga desde CDN y las teselas OSM/Georef están sujetos a disponibilidad y políticas de uso. No se contrata ningún servicio premium.

## Pruebas
Comprobación sintáctica JS y Chromium aislado con almacenamiento simulado: modo Senderos, generación de enlace multiparada, suspensión desde agenda, pegado/confirmación de coordenadas y guardado de ubicación, importación GPX y publicación de un sendero visible en el portal. Las pruebas directas de navegación HTTP están bloqueadas por el entorno; no se comprobó la resolución de Google Maps, la búsqueda Georef, las teselas OSM, el dibujo con cartografía real, ni seguridad o sincronización multiusuario. Probar en navegador real antes de publicación.
