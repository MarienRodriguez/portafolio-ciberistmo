// Terminal animada de "Sobre mí". Cambia las frases en la lista "lineas".
(function () {
  const lineas = ["> hola_mundo()", "> aprendiendo...", "> compilando ✔"];
  const pantalla = document.getElementById("terminal-texto");
  if (!pantalla) return;

  let linea = 0;       // línea que se está escribiendo
  let letras = 0;      // letras escritas de esa línea
  let escrito = "";    // líneas ya terminadas

  function escribir() {
    if (linea === lineas.length) {       // terminó todo: espera y reinicia
      setTimeout(function () {
        linea = 0;
        letras = 0;
        escrito = "";
        pantalla.textContent = "";
        escribir();
      }, 3000);
      return;
    }
    letras++;
    pantalla.textContent = escrito + lineas[linea].slice(0, letras);
    if (letras === lineas[linea].length) {   // línea completa: pasa a la siguiente
      escrito += lineas[linea] + "\n";
      linea++;
      letras = 0;
      setTimeout(escribir, 600);
    } else {
      setTimeout(escribir, 70);
    }
  }

  escribir();
})();