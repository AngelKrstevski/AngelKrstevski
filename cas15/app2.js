let colorInput = document.querySelector(`#color`);
let fontSizeInput = document.querySelector(`#fontSize`);
let textInput = document.querySelector(`#text`);
let submitBtn = document.querySelector(`#submit`);
let displayResult = document.querySelector(`#displayResult`);

submitBtn.addEventListener(`click`, function () {
    let colorValue = colorInput.value;
    let fontSizeValue = fontSizeInput.value;
    let textValue = textInput.value;

    displayResult.innerHTML = `
    <p style="color: ${colorValue}; font-size: ${fontSizeValue}px;">${textValue}</p>
    `
    
    colorInput.value = ``;
    fontSizeInput.value = ``;
    textInput.value = ``;
})