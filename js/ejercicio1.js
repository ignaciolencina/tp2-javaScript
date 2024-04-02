// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

// const edad = parseInt(prompt("Ingresá tu edad"));

let edad = prompt("Ingresá tu edad");
edad = Number(edad);

if (isNaN(edad)) {
  alert("No es un número");
} else {
  if (edad <= 0) {
    alert("No es un número válido");
  } else if (edad >= 18) {
    alert("Tiene edad sufiente para conducir");
  } else {
    alert("Usted es menor de edad, no puede conducir");
  }
}
