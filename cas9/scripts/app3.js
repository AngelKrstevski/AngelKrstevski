let celsius = parseFloat(prompt(`Enter temprture in celsius`));
let farenhait = parseFloat(prompt(`Enter temprture in farenhait`))

// formula za pretvarane na farenhajnovi vo celzusovi stepeni

let formulaCelsiusToFarenhait = celsius * (9/5) + 32;
let formulaFarenhaitToCelsius = (farenhait - 32) * 5/9;

console.log(formulaCelsiusToFarenhait);
console.log(formulaFarenhaitToCelsius);