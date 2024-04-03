// 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-

// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10


for (let i = 1; i <= 500; i++) {
    document.write(i);
    document.write("<br>");

    if (i % 4 === 0 && i % 9 === 0) {
        document.write("(Múltiplo de 4 y 9)");
        document.write("<br>");
    } else if (i % 4 === 0) {
        document.write("(Múltiplo de 4)");
        document.write("<br>");
    } else if (i % 9 === 0) {
        document.write("(Múltiplo de 9)");
        document.write("<br>");
    } else {
    }

    if (i % 5 === 0) {
        document.write("-----------------------------------");
        document.write("<br>");

    }
}

// NO SE COMO HACER PARA QUE EL TEXTO DE MULTIPLO SE ESCRIBA AL LADO DEL NUMERO, PUSE:
// document.write(i + "(Múltiplo de 4 y 9)"); PERO DE ESTA MANERA SE DUPLICA EL NUMERO :(