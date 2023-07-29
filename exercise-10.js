// Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.

const programs = [
    { level: "Course", price: 4999, duration: 2 },
    { level: "Career", price: 3999, duration: 6 },
    { level: "Master", price: 2999, duration: 12 },
];

const scholarships = [
    { nameScholarship: "Facebook", discount: 20 },
    { nameScholarship: "Google", discount: 15 },
    { nameScholarship: "Jesua", discount: 50 },
];

function totalPriceProgram (program, scholarship) {
    if (typeof program === "string" && typeof scholarship === "string") {

        let programSelect = programs.find(obj => obj.level === program);
        let scholarshipSelect = scholarships.find(obj => obj.nameScholarship === scholarship);

        if(programSelect && scholarshipSelect) {
            console.log(`The ${program} program has a price of $${programSelect.price} MXN and lats ${programSelect.duration} months.`);

            let discountValue = Math.floor(programSelect.price * (scholarshipSelect.discount / 100));
            let total = programSelect.price - discountValue;
            console.log("adas",total);

            console.log(`Total price is $${total} MXN with ${scholarshipSelect.discount}% applied`)
        } else {
            console.log("Program is not found")
        }
    } else {
        console.log("Value is not valid")
    }
} 

totalPriceProgram("", "Google");
totalPriceProgram("Course", "Facebook");
totalPriceProgram("Master", "Google");
totalPriceProgram("Career", "Jesua");