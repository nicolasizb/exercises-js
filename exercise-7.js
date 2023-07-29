// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

validDate("");
validDate("lunes");
validDate("martes");
validDate("miercoles");
validDate("jueves");
validDate("viernes");
validDate("sabado");
validDate("domingo");

function validDate(date) {
    if (typeof date === "string" && date !== "") {
        if (date == "lunes") {
            console.log("You chose monday");
        } else if (date == "viernes") {
            console.log("You chose friday");
        } else if (date == "sabado" || date === "domingo") {
            console.log("You chose weekend");
        } else {
            console.log("You chose other day");
        }
    } else {
        console.log("Value is not valid");
    }
}