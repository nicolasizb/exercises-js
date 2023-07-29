// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

isValidNumber("");
isValidNumber(22, 3700, 100);
isValidNumber(1000, 100, 100);
isValidNumber(64, 6000, 200);

function isValidNumber (numOne, numTwo, numThree) {
    let numbers = [];

    if (typeof numOne === "number" && typeof numTwo === "number") {
        if (numOne !== numTwo && numOne!== numThree && numTwo !== numThree) {
            numbers.push(numOne, numTwo, numThree)
            numbers.sort((a,b) => a - b);
            let minNum = numbers[0];
            let middleNum = numbers[1];
            let maxNum = numbers[2];

            console.log(`The smallest number is ${minNum}`);
            console.log(`The largest number is ${middleNum}`);
            console.log(`The largest number is ${maxNum}`);
        } else {
            if(numOne === numTwo) {
                console.log(`Numbers same are ${numOne} and ${numTwo}`);
            } else if (numOne === numThree) {
                console.log(`Numbers same are ${numOne} and ${numThree}`);
            } else {
                console.log(`Numbers same are ${numTwo} and ${numThree}`);
            }
        }
    } else {
        console.log("Number is not valid");
    }
}