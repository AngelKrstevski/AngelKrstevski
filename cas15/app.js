let rowsInput = document.querySelector(`#rows`);
let columnsInput = document.querySelector(`#columns`);
let createTableDimensionsBtn = document.querySelector(`#crateTableDimensions`);
let tableContainer = document.querySelector(`#tableContainer`);

function createTable(rowsValue, columsValue) {
    let rows = parseInt(rowsValue.value);
    let cols = parseInt(columsValue.value);

    let table = ``;

    for(let i = 0; i < rows; i++) {
        let row = `<tr>`;

        for(let j = 0; j < cols; j++) {
            row += `<td>Row ${i} Col ${j}</td>`;
        }
        row += `</tr>`;
        table += row;
    }

    tableContainer.innerHTML = `<table>${table}</table>`
    
    rowsValue.value = ``;
    columsValue.value = ``;
}

createTableDimensionsBtn.addEventListener(`click`, function () {
    createTable(rowsInput, columnsInput);
})