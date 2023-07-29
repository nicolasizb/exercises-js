// 3. Crear un programa que determine si un número es par o no, la respuesta será mostrada en un Alert.

isValidNumber(2);
isValidNumber(7);
isValidNumber(9);
isValidNumber(20);
isValidNumber("");

function isValidNumber (num) {
    if(num % 2 === 0 && typeof num === "number") {
        console.log(`El número ${num} es par`);
    } else if (num % 2 !== 0 && typeof num === "number") {
        console.log(`El número ${num} es impar`);
    } else {
        console.log("El valor ingresado no es valido")
    }
}
