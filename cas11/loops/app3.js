function sobirane(num1, num2) {
    console.log(`Zbir of ${num1} and ${num2} is ${num1 + num2}`);
}

function odzemane(num1, num2) {
    console.log(`Razlika of ${num1} and ${num2} is ${num1 - num2}`);
}

function monzene(num1, num2) {
    console.log(`Proizvod of ${num1} and ${num2} is ${num1 * num2}`);
}

function delene(num1, num2) {
    console.log(`Kolicnik of ${num1} and ${num2} is ${num1 / num2}`);
}

let num1Input = parseInt(prompt(`Please enter num1`));
let num2Input = parseInt(prompt(`Please enter num2`));

sobirane(num1Input, num2Input);
odzemane(num1Input, num2Input);
monzene(num1Input, num2Input);
delene(num1Input, num2Input);