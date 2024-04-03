// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let numero = prompt("Ingrese un número entre 1 y 50:");

let es_numero = parseInt(numero);

if (isNaN(es_numero) || es_numero <= 0 || es_numero > 50) {
  alert("Dije NÚMERO entre 1 y 50.");
} else {
  for (let i = es_numero; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      document.write(i);
    }
    document.write("<br />");
  }
}
