// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Ingrese un texto:");
let primeraVocal = -1;
texto = texto.toLowerCase();

if (texto !== "") {
  for (let i = 0; i < texto.length; i++) {
    let vocal = texto.charAt(i);
    if (
      vocal === "a" ||
      vocal === "e" ||
      vocal === "i" ||
      vocal === "o" ||
      vocal === "u" ||
      vocal === "á" ||
      vocal === "é" ||
      vocal === "í" ||
      vocal === "ó" ||
      vocal === "ú" ||
      vocal === "ü"
    ) {
      primeraVocal = i;
      break;
    }
  }

  if (primeraVocal !== -1) {
    alert(`La primera vocal del texto es: ${primeraVocal}`);
  } else {
    alert("El texto no contiene vocales");
  }
} else {
  alert("No se ingresó ningún texto");
}
