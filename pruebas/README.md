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


## Entorno /pruebas/
Este paquete utiliza almacenamiento local independiente de la versión estable (mtm-v41-pruebas-db-1 y mtm-route-v41-pruebas). Subir la carpeta pruebas completa a la raíz de la rama main; no reemplazar los archivos de la raíz. No contiene autenticación real.

## V4.2 — Comunicación e Inteligencia Territorial

Paquete preparado para la subcarpeta `pruebas/` existente. Mantiene la clave de datos de la V4.1 de pruebas y añade el modelo de comunicación al cargar. No altera `main` fuera de esa carpeta ni necesita modificar la configuración de Pages. Si se actualiza, conservar una copia JSON del navegador antes de comenzar.

### Recorrido de prueba
1. Ingresar como administrador del Ente > Comunicación > Convocatorias. Crear una solicitud para una o más localidades, con fecha y requisitos.
2. Salir e ingresar como referente de una localidad convocada. Abrir Convocatorias y vincular propuestas, adjuntar imágenes autorizadas o responder sin propuestas. La opción Crear nueva propuesta crea un borrador vinculado y abre el editor existente. Finalizar y regresar a la convocatoria para enviar la respuesta.
3. Volver al Ente > Comunicación > Convocatorias. Abrir seguimiento, exportar XLSX/ZIP y crear un enlace con las propuestas públicas de las respuestas enviadas.
4. Abrir el enlace en el portal. Consultar una ficha, agregarla al recorrido y consultar el tablero de Impacto en el mismo navegador. Generar un QR para el canal correspondiente y exportar el informe Excel o utilizar Imprimir / PDF si el navegador permite imprimir.

### Límites de la demo
- Los perfiles son simulados. No hay autenticación ni autorización real, base de datos central, sincronización multiusuario, envío de correo ni protección de documentos privados. No cargar material sensible, datos personales, credenciales ni información operativa real. Las respuestas y métricas viven en localStorage; tienen límites de espacio. Los adjuntos de imagen se redimensionan (máximo 5 por respuesta); los videos se solicitan mediante enlaces. Los recordatorios automáticos se evalúan al ingresar o abrir Comunicación dentro de los tres días anteriores al vencimiento, no funcionan con la página cerrada. La segmentación territorial se define por selección manual de localidades, sin inventar divisiones oficiales.
- Un enlace inteligente conserva su identificador y una copia inicial de parámetros públicos como respaldo. En un navegador nuevo se aplican esos parámetros sobre las publicaciones de muestra disponibles allí. Los cambios posteriores, las propuestas nuevas y fotos locales solo están disponibles donde existan esos datos; una URL/QR realmente dinámico entre dispositivos necesita el backend. Los QR se generan localmente; los enlaces demasiado largos pueden superar la capacidad del código. No se publican materiales privados en el enlace. La personalización de la tarjeta de vista previa en redes (Open Graph) exige servir metadatos específicos por URL y no está implementada en Pages.
- Las métricas registran interacciones desde V4.2 en ese navegador, no números de toda la ciudadanía. Las sesiones se aproximan mediante un identificador de pestaña, no personas únicas; los clics hacia Maps no prueban viajes efectivos. El informe PDF se obtiene por la función de impresión del navegador. Se incluyen exportaciones XLSX reales y ZIP locales. Los datos históricos V4.1 no se reconstruyen artificialmente. La medición central, los recordatorios en segundo plano y permisos reales son requisitos del servidor definitivo.
- No se añaden servicios pagos; QRCode for JavaScript (Kazuhiko Arase, MIT) y JSZip (licencia incluida en el archivo) están empaquetados en `gestion/comunicacion-admin.js`. Leaflet y los servicios de mapas/geocodificación siguen siendo dependencias externas existentes.

### Validación local
Sintaxis JavaScript comprobada. En Chromium con HTML/JS cargados localmente y almacenamiento/URL simulados (navegación de red bloqueada), se probó creación de convocatoria, respuesta municipal, exportación XLSX y ZIP, selección desde respuesta, enlace público, QR, registro de interacciones y visualización en tablero. El XLSX se abrió con openpyxl y el QR fue decodificado. Quedan por probar en el sitio real la instalación, los servicios externos, la impresión PDF y los demás casos límite. No usar la demo como sistema institucional en producción.


## V4.3 — Identidad final
Marca extraída de aplicaciones turismo .pdf, página 1. Logo claro adaptado a fondo blanco cambiando solo el lettering blanco a azul marino. Franja gráfica de la misma página. Lema gráfico de la versión anterior, coincidente con la campaña. Tipografías de interfaz de sistema provisionales: pendiente recibir nombres/archivos web autorizados. Funcionalidades y almacenamiento de V4.2 sin cambios. Entorno estático de demostración, no apto para datos privados.

## V4.4 — Experiencia visual y movimiento
- Portada editorial con el lema y la marca oficiales, sin espacios de fotos pendientes. El collage admite más imágenes cuando se incorporen al catálogo; actualmente se usa la única imagen de referencia disponible, no un conjunto de fotografías oficiales definitivas.
- Animación de entrada, aparición de secciones al hacer scroll, transiciones de navegación, tarjetas y diálogos; se respeta `prefers-reduced-motion`.
- Navegación móvil inferior, filtros con contador y restablecimiento, alternancia de listado/mapa, fichas con acciones visibles y recorrido con progreso de paradas. Ajustes visuales al administrador y acceso institucional.
- No altera las claves de almacenamiento ni el código de Comunicación. Copia local de pruebas, sin modificaciones remotas. Los servicios externos y el backend definitivo siguen pendientes de validación. Las capturas locales pueden mostrar el esquema regional de respaldo, no las teselas reales.
- Actualización desde V4.3: reemplazar `index.html`, `public.js`, `style.css`, `README.md` y añadir `motion.js` en `pruebas/`; reemplazar `index.html` y `admin.css` en `pruebas/gestion/`. No tocar la raíz de `main` ni eliminar los demás archivos.
