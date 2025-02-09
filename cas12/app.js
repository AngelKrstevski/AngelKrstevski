const pi = 3.14;
let number = 10;
let result;

result = number + 5;

console.log(result);

let num = 12;

if (num > 0) {
    console.log(`The number ${num} is positiv`);
} else if (num < 0) {
    console.log(`The number ${num} is negative`);
} else if (num === 0) {
    console.log(`The number is zero`);
} else {
    console.log(`Please enter a valid number`);
}

// Sto ke ni ispise ovaa?
let counter = 0;
while(counter <= 5) {
    console.log(counter);
    counter++;
}

let day = 10;

switch(day) {
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuseday`);
        break;
    case 3:
        console.log(`Wednseday`);
        break;
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`Friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    case 7:
        console.log(`Sunday`);
        break;
    default:
        console.log(`Pease enter a valid day`);
}

for(let i = 1; i < 10; i++) {
    console.log(i);
}

for(let i = 10; i > 0; i--) {
    console.log(i);
}