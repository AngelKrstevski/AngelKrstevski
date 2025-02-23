let resultParagraph = document.querySelector(`#result`);
let increaseBtn = document.querySelector(`#increaseBtn`);
let decreaseBtn = document.querySelector(`#decreaseBtn`);
let resetBtn = document.querySelector(`#reset`);

let count = 0;

function increase() {
    count++;
    resultParagraph.innerHTML = count;
}

function decrease() {
    count--;
    resultParagraph.innerHTML = count;
}

function reset() {
    count = 0;
    resultParagraph.innerHTML = count;
}

increaseBtn.addEventListener(`click`, increase);
decreaseBtn.addEventListener(`click`, decrease);
resetBtn.addEventListener(`click`, reset);