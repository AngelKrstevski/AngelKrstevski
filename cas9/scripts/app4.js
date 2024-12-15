let a = parseInt(prompt(`Enter value for a `));
let b = parseInt(prompt(`Enter value for b `));

if (a > b) {
    console.log(`${a} is grather than ${b}`);
} else if(b > a) {
    console.log(`${b} is grather than ${a}`);
} else {
    console.log(`${a} and ${b} are equal`);
}