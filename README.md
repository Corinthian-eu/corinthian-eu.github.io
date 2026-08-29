# Corinthian

Sitio público para el servicio de acceso universitario España y la línea separada Private Client.

## Páginas

- `index.html`: propuesta principal para familias latinoamericanas.
- `programs.html`: alcance del servicio Acceso España.
- `booking.html`: evaluación inicial conectada a Zoho Forms; tras el envío permite reservar en Google Calendar.
- `private-client.html`: presentación independiente del mandato premium.
- `articles/`: índice editorial y artículos publicados.

## Agenda y videollamada

- El formulario de captación permanece en Zoho Forms.
- La agenda visible al cliente es Google Calendar y las llamadas se realizan por Google Meet.
- La URL única se configura en `assets/js/calendar-config.js`.
- Si todavía no existe una URL válida de Google Calendar, los botones cambian automáticamente a correo y nunca muestran un enlace roto.
- La disponibilidad publicada debe respetar la ventana 05:00–23:00 de Madrid y excluir las clases, el trabajo y cualquier compromiso bloqueado en el calendario.

## Publicación

Todo cambio sigue `../01-operaciones/SOP-05-cambios-y-publicacion-web.md`. Un cambio no se considera publicado hasta enviarlo a GitHub y comprobar el resultado en la URL pública.
