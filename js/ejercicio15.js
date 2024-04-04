// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let cadena = prompt("Ingrese un texto:");
cadena = cadena.toLowerCase();
let sumador = 0;
if (cadena !== "") {
  for (let i = 0; i < cadena.length; i++) {
    if (
      cadena[i] === "a" ||
      cadena[i] === "e" ||
      cadena[i] === "i" ||
      cadena[i] === "o" ||
      cadena[i] === "u" ||
      cadena[i] === "á" ||
      cadena[i] === "é" ||
      cadena[i] === "í" ||
      cadena[i] === "ó" ||
      cadena[i] === "ú" ||
      cadena[i] === "ü"
    ) {
      sumador++;
    }
  }
  if (sumador === 1) {
    alert(`El texto tiene ${sumador} vocal.`);
  } else {
    alert(`El texto tiene ${sumador} vocales.`);
  }
} else {
  alert("No se ingresó ningún texto.");
}
