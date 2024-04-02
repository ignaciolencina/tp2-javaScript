// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let suma = 0;

do {
  let numero = prompt("Ingrese un número:");

  if (numero === null) {
    break;
  }

  let es_numero = parseInt(numero);

  if (isNaN(es_numero)) {
    alert("Ingrese un número, no me haga recurrir a la violencia.");
  } else {
    suma += es_numero;
  }
} while (true);

alert(`La suma total de los numero ingresados es = ${suma}`);
