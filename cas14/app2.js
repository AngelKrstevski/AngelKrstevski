let firstDiv = document.querySelector(`#first`);
let secondDiv = document.querySelector(`#second`);
let thirdDiv = document.querySelector(`#third`);

firstDiv.addEventListener(`click`, function() {
    console.log(`The red box was clicked`);
})

secondDiv.addEventListener(`click`, function() {
    console.log(`The yellow box was clicked`);
})

thirdDiv.addEventListener(`click`, function() {
    console.log(`The green box was clicked`);
})