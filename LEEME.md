# Sitio web — Escuela de Párvulos El Olimpo

Sitio estático de 7 páginas, listo para subir al hosting de parvulosolimpo.cl (o para copiar sus textos y estructura en WordPress).

## Páginas
- index.html — Inicio
- niveles.html — Niveles y jornadas
- matricula.html — Matrícula 2027, formulario de visita y preguntas frecuentes
- nosotros.html — Historia, Tía Juanita y documentos institucionales
- casa-y-patio.html — Instalaciones
- contacto.html — Datos, mapa y cómo llegar
- privacidad.html — Política de privacidad (borrador para revisión legal, Ley 21.719)

Incluye además styles.css, script.js, favicon.svg, sitemap.xml y robots.txt.

## Antes de publicar
1. Fotos: reemplazar cada recuadro rayado ("Foto: ...") por una imagen real (`<img src="..." alt="...">`). Sin rostros de niños, o solo con autorización escrita de los apoderados.
2. Testimonios: reemplazar los 3 espacios de la portada por testimonios reales, con el nombre del apoderado y su autorización. No usar textos inventados.
3. Jornada extendida: agregar el horario en niveles.html (dice "Consulta el horario") y en las preguntas frecuentes de matricula.html.
4. Teléfono: el sitio usa el WhatsApp +56 9 4155 8564. Si se elige otro número principal, cambiarlo en todas las páginas y en script.js.
5. Documentos PDF: los enlaces apuntan a parvulosolimpo.cl/documentos/... Mantener esa carpeta en el servidor.
6. Política de privacidad: que la revise un abogado antes de publicarla.
7. Después de subirlo: enviar sitemap.xml en Google Search Console y conectar Google Analytics 4.

## Cómo funciona el formulario
No guarda datos ni necesita servidor: arma un mensaje con el nombre, nivel y jornada y abre WhatsApp para que la familia lo envíe.
