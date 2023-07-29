// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

console.log("¿Eres bellisimo/a?");

userAnswer("si");
userAnswer("no");
userAnswer("");

function userAnswer (aswer) {
    if(aswer === "si") {
        console.log("Ciertamente");
    } else if (aswer === "no") {
        console.log("No te creo");
    } else {
        console.log("Ingresa un valor valido");
    }
} 