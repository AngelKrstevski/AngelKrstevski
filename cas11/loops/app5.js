// So upotreba na for i funkcija, za vnesen broj da go ispiseme negoviot kvadrat

function kvadratNaBrojotOdNiza(arrayOfNumbers) {
    for(let i = 0; i < arrayOfNumbers.length; i++){
        console.log(`Squre of number ${arrayOfNumbers[i]} is ${arrayOfNumbers[i] * arrayOfNumbers[i]}`);
    }
}

let arrayOfNumbersInput = [1, 2, 3, 10, 12];

kvadratNaBrojotOdNiza(arrayOfNumbersInput);