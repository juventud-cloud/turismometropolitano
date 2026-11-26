# Turismo Metropolitano V4.0 — prototipo local navegable

## Abrir en VS Code
1. Descomprimir TODO el ZIP, no abrir HTML dentro del comprimido.
2. En VS Code, Archivo > Abrir carpeta > `turismo-metropolitano-v4-demo`.
3. Si hace falta, instalar Live Server (Ritwick Dey) desde Extensiones.
4. Clic derecho en `index.html` > Open with Live Server. Abrir siempre portal y administrador bajo la misma dirección/puerto. No abrir el HTML con doble clic: el almacenamiento local puede no compartirse entre archivos.
5. En el pie del portal, Acceso institucional. Elegir un perfil de demostración; no se requieren credenciales. Es una simulación explícita, NO autenticación real.

Alternativa: con Python instalado, ejecutar `python -m http.server 8000` dentro de la carpeta y abrir `http://localhost:8000/`.

## Qué probar
- Portal: buscador, chips, filtros de localidad/categoría/período, ficha, WhatsApp, catálogo y recorrido hasta cinco paradas. Con internet intenta cargar Leaflet/OSM desde CDN; si falla, mantiene una representación geográfica esquemática, claramente identificada. Los puntos de muestra son aproximados y no representan ubicaciones exactas. Los recorridos de varias paradas solo pueden exportarse con coordenadas confirmadas.
- Administrador: iniciar como Ente o referente municipal. Crear evento/atractivo, editar, previsualizar, adjuntar foto autorizada, guardar borrador o publicar. Volver al portal bajo el mismo origen y consultar la publicación. En Agenda/Atractivos, usar Control para solicitar corrección, poner bajo revisión o suspender; el municipio recibe una notificación interna simulada. Entrar con el perfil correspondiente para verla. Directa por defecto, configurable por municipio desde el administrador. Fichas municipales, galerías, biblioteca, campaña, estadísticas locales, calendario, CSV y respaldo JSON.
- El editor tiene dos pestañas en móvil. Desde Configuración el administrador puede restaurar la muestra inicial. Los cambios residen en `localStorage` del navegador y no se sincronizan con otras personas o dispositivos. El almacenamiento es limitado; las imágenes se reducen en el navegador.

## Datos y marca
Muestra de 28 registros: 20 atractivos, 6 eventos fechados y 2 incidencias históricas (planilla auditada; nombres y descripciones abreviados), 27 localidades del catálogo anterior, aún por verificar institucionalmente. No es una migración total ni una certificación de vigencia. Los eventos se filtran según la fecha actual de Córdoba; la ausencia de nuevos eventos en el futuro es esperable. No se copiaron fotografías de Drive, contactos privados ni credenciales.

Se conservan recursos gráficos de V3 y la pieza PDF suministrada. El lema de portada se reproduce como recorte rasterizado del diseño del PDF (con texto alternativo), no como tipografía inventada. El collage es provisional: una referencia fotográfica recortada del mockup de señalética de La Granja y tres posiciones pendientes, reemplazables desde Campañas. Dreambox Light y Puzzle Face Glyph Block corresponden al logo; no se distribuyen archivos de fuentes. La tipografía de interfaz usa system-ui de modo provisional hasta recibir las fuentes oficiales de titulares/texto y licencias web. No usar este paquete como material de difusión definitivo sin autorización.

## Alcance y pendientes
Este prototipo no es un sistema seguro ni un servidor de producción. No implementa autenticación real, sesiones seguras, permisos de servidor, base relacional, API, correo, respaldos automáticos, almacenamiento privado, geocodificación real de editor, límites municipales, agrupación por distancia ni recurrencias avanzadas, programación automática de campañas o analítica de producción. El selector de ubicación es esquemático; no debe usarse para validar destinos reales. No contiene claves ni se conecta a Sheets/Forms/Apps Script/GitHub. La biblioteca y los permisos funcionan como simulación local, no como aislamiento de datos reales.

Siguiente fase: obtener especificación de hosting (PHP/MySQL/MariaDB si está incluido), fuentes y fotografías oficiales, catálogo/endpoint municipal, importar todo el histórico con revisión, implementar backend y probar seguridad y rendimiento. Sin servicios premium. No publicar este prototipo como administración institucional.

## Pruebas de esta entrega
Node: comprobación sintáctica de JS. Chromium: render y flujos básicos a 1440, 390 y 320 px con HTML/CSS/JS cargados en un entorno aislado, almacenamiento simulado y cartografía de respaldo; publicación, filtrado de datos actualizados, suspensión, notificación municipal y vista previa. La red del entorno bloqueó la navegación HTTP/file directa, por lo que no se probó el servidor Live Server real, la sincronización real entre pestañas ni las teselas externas. No se realizaron pruebas de seguridad de producción.
