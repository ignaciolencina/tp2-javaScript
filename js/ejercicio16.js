// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”

let cadena = prompt("Ingrese una oración:");
let cadenaAlReves = "";

if (cadena !== "") {
  for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaAlReves += cadena[i];
  }

  alert(`Esta es tu oración escrita al revés: ${cadenaAlReves}`);
} else {
  alert("No se ingresó una oración");
}
