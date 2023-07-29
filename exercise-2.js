// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

test(2);
test(20);
test(7);
test(13);
test("");

function test (sum) {

    if (sum % 2 === 0 && typeof sum === "number") {
        console.log(`El número ${sum} es divisible entre 2`);
    } else if (sum % 2 === 1 && typeof sum === "number") {
        console.log(`El número ${sum} no es divisible entre 2`);
    } else {
        console.log("Número no valido");
    }
}