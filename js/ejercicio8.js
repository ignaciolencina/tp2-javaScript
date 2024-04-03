// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let numero = prompt("Ingrese un número entre 1 y 50:");

if (numero != null){
    let es_numero = parseInt(numero);

    if (isNaN(es_numero) || es_numero <= 0 || es_numero > 50) {
      alert("Dije NÚMERO entre 1 y 50.");
    } else {
      for (let i = 1; i <= es_numero; i++) {
        for (let j = 1; j <= i; j++) {
          document.write(i);
        }
        document.write("<br />");
      }
    }
} else {
    alert("Que mala onda :(")
}

