// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

let nombre1 = prompt("Ingrese el nombre de la primera persona:");
let edad1 = parseInt(prompt(`Ingrese la edad de ${nombre1}`));

let nombre2 = prompt("Ingrese el nombre de la segunda persona:");
let edad2 = parseInt(prompt(`Ingrese la edad de ${nombre2}`));

let nombre3 = prompt("Ingrese el nombre de la tercera persona:");
let edad3 = parseInt(prompt(`Ingrese la edad de ${nombre3}`));

let mayor = Math.max(edad1, edad2, edad3);

if (mayor === edad1) {
  alert(`${nombre1} es el mayor.`);
} else if (mayor === edad2) {
  alert(`${nombre2} es el mayor`);
} else {
  alert(`${nombre3} es el mayor`);
}
