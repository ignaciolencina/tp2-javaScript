// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let palabras = "";

do {
  let texto = prompt("Ingrese las malas palabras aqui:");

  if (texto === null) {
    break;
  }
  palabras += `${texto} - `;
  alert(`${texto}! exclamó la dulce princesa`);
} while (true);

alert(`La sumatoria de tus guarangadas es: ${palabras}`);
