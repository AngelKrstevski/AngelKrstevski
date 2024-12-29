// Programa koja ke pretvara kuceskigodini godini vo covecki i obratno

function humanToDogs(humanYears) {
    console.log(`${humanYears} years in dogs years are ${humanYears * 7} years old`);
}

function dogsToHuman(dogsYears) {
    console.log(`${dogsYears} years in human years are ${dogsYears / 7} years old`);
}

let humanYearsInput = parseInt(prompt(`Please enter your years`))
let dogsYearsInput = parseInt(prompt(`Please enter your dogs years`))

humanToDogs(humanYearsInput);
dogsToHuman(dogsYearsInput);