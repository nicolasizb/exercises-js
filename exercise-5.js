// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

isValidNumber(1000, 100);
isValidNumber(10, 900);
isValidNumber("");

function isValidNumber (numOne, numTwo) {
    let numbers = [];

    if (typeof numOne === "number" && typeof numTwo === "number") {
        if (numOne !== numTwo) {
            numbers.push(numOne, numTwo)
            numbers.sort((a,b) => a - b);
            let minNum = numbers[0];
            let maxNum = numbers[1];

            console.log(`The smallest number is ${minNum}`);
            console.log(`The largest number is ${maxNum}`);
        } else {
            console.log("Number is same");
        }
    } else {
        console.log("Number is not valid");
    }
}