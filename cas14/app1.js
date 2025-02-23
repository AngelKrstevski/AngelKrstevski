let firstName = document.querySelector(`#fName`);
let lastName = document.querySelector(`#lName`);
let saveBtn = document.querySelector(`#saveBtn`);
let showResults = document.querySelector(`#showResults`);

saveBtn.addEventListener(`click`, function() {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;

    showResults.innerHTML = `
        <h2>First name: ${firstNameValue}</h2>
        <h2>Last name: ${lastNameValue}</h2>
    `

    firstName.value = ``;
    lastName.value = ``;
})