// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

isValidNumber(20);
isValidNumber(10);
isValidNumber(33);
isValidNumber(100);
isValidNumber(1000);
isValidNumber("");

function isValidNumber (sum) {
    if (sum === 1000 && typeof sum === "number") {
        console.log("Ganaste un premio");
    } else if (sum !== 1000 && typeof sum === "number") {
        console.log("Lo sentimos, sigue participando");
    } else {
        console.log("Valor no es valido")
    }
}