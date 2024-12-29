function sayHello(name,surname) {
    console.log(`Your name is ${name}`);
    console.log(`Your surname is ${surname}`);
}

let nameInput = prompt(`Please enter a name`);
let surnameInput = prompt(`Please enter your surname`);

sayHello(nameInput,surnameInput);