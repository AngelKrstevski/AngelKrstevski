let firstDiv = document.querySelector(`#myTitle`);
let dataSvaeBtn = document.querySelector(`.dataSave`);
let secondDiv = document.querySelector(`#secondDiv`);

console.log(firstDiv);
// console.log(firstDiv.textContent);

firstDiv.addEventListener(`mouseover`, function () {
    // firstDiv.style.backgroundColor = `red`;
    // firstDiv.style.color = `yellow`;
})

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let marko = new Person(`Marko`, `Stojcevski`);

console.log(marko.firstName);
console.log(marko.lastName);


dataSvaeBtn.addEventListener(`click`, function () {
    secondDiv.innerHTML = `
        <h2>This is our person</h2>
        <h3>First name: ${marko.firstName}</h3>
        <h3>Last name: ${marko.lastName}</h3>
    `;
})