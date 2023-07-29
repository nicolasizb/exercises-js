// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

validQualification("");
validQualification(-1);
validQualification(0);
validQualification(1);
validQualification(3);
validQualification(6);
validQualification(7);
validQualification(9);
validQualification(10);
validQualification(11);

function validQualification(num) {
    if (typeof num === "number") {
        if (num >= 0 && num <= 10) {
            if (num < 6) {
                console.log(num, "==> Reprobate");
            } else if (num >= 6 && num <= 8) {
                console.log(num, "==> Regular");
            } else if (num === 9) {
                console.log(num, "==> Good");
            } else {
                console.log(num, "==> Excelent")
            }
        } else {
            console.log(num, "==> Number out of range")
        }
    } else {
        console.log("Value is not valid")
    }
}