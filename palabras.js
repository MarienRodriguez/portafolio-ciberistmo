// Efecto de escritura: cambia la palabra rosa de la portada.
// Para cambiar las palabras, edita la lista "palabras".
const palabras = ["Programación", "Sistemas Operativos", "Aprendizaje Contínuo"];

const elemento = document.getElementById("palabra-cambiante");
const prefiereQuieto = matchMedia("(prefers-reduced-motion: reduce)").matches;

if (elemento && !prefiereQuieto) {
  let indice = 0;                      // palabra actual
  let letras = palabras[0].length;     // cuántas letras se ven ahora
  let borrando = true;

  function animar() {
    if (borrando) {
      letras--;
      elemento.textContent = palabras[indice].slice(0, letras);
      if (letras === 0) {              // ya se borró: pasa a la siguiente palabra
        borrando = false;
        indice = (indice + 1) % palabras.length;
      }
      setTimeout(animar, 45);
    } else {
      letras++;
      elemento.textContent = palabras[indice].slice(0, letras);
      if (letras === palabras[indice].length) {   // palabra completa: espera y borra
        borrando = true;
        setTimeout(animar, 1800);
        return;
      }
      setTimeout(animar, 80);
    }
  }

  setTimeout(animar, 1800);
}
