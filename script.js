// Menú en celulares
(function () {
  var boton = document.querySelector('.boton-menu');
  var menu = document.getElementById('menu');
  if (boton && menu) {
    boton.addEventListener('click', function () {
      var abierto = menu.classList.toggle('abierto');
      boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      boton.textContent = abierto ? 'Cerrar' : 'Menú';
    });
  }

  // Formulario de visita: arma el mensaje y abre WhatsApp
  var form = document.getElementById('form-visita');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true;
    ['nombre', 'nivel'].forEach(function (id) {
      var campo = document.getElementById(id);
      var vacio = !campo.value.trim();
      campo.closest('.campo').classList.toggle('con-error', vacio);
      if (vacio && ok) { campo.focus(); ok = false; }
    });
    if (!ok) return;
    var v = function (id) { return document.getElementById(id).value.trim(); };
    var texto = 'Hola, soy ' + v('nombre') + '. Me gustaría agendar una visita al Jardín Infantil El Olimpo.' +
      '\nNivel: ' + v('nivel') +
      '\nJornada: ' + v('jornada') +
      (v('cuando') ? '\nMe acomoda: ' + v('cuando') : '');
    window.open('https://wa.me/56941558564?text=' + encodeURIComponent(texto), '_blank', 'noopener');
  });
})();
