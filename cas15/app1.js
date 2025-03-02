let firstName = document.querySelector(`#firstName`);
let lastName = document.querySelector(`#lastName`);
let phoneNumber = document.querySelector(`#phoneNumber`);
let submitBtn = document.querySelector(`#submit`);
let tbody = document.querySelector(`#tbody`);
let phoneBookArr = [];

function PhoneBook(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

function addNewContact() {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let phoneNumberValue = phoneNumber.value;

    if (!check(firstNameValue, lastNameValue, phoneNumberValue)) {
        return;
    }

    let phoneBook = new PhoneBook(firstNameValue, lastNameValue, phoneNumberValue);
    console.log(phoneBook);
    addRows(phoneBook);

    firstName.value = ``;
    lastName.value = ``
    phoneNumber.value = ``;
}

function check(firstName, lastName, phoneNumber) {
    if (!firstName) {
        alert(`Please enter first name`);
        return false;
    }

    if (!lastName) {
        alert(`Please enter last name`);
        return false;
    }

    if (!phoneNumber) {
        alert(`Please enter phone number`);
        return false;
    }

    if(isNaN(phoneNumber)) {
        alert(`Please enter a valid phone number`);
        return false;
    }

    return true;
}

function addRows(phoneBookValue){
    let row = document.createElement(`tr`);

    row.innerHTML = `
        <td>${phoneBookValue.firstName}</td>
        <td>${phoneBookValue.lastName}</td>
        <td>${phoneBookValue.phoneNumber}</td>
    `

    tbody.appendChild(row)
}

submitBtn.addEventListener(`click`, function () {
    addNewContact();
})