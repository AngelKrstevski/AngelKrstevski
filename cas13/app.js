// ~~~~~~~~~~~~~~ Selctors ~~~~~~~~~~~~~~~~~

// Select by id
let myFirstDiv = document.getElementById(`first`)
console.log(myFirstDiv);

let myfirstTitle = document.getElementById(`myTitle`)
console.log(myfirstTitle);

// Select by tag name
let paragraphs = document.getElementsByTagName(`p`);
console.log(paragraphs);

let h1Headers = document.getElementsByTagName(`h1`);
console.log(h1Headers);

// Select by class name
let secondParagraph = document.getElementsByClassName(`second`)
console.log(secondParagraph);

// ~~~~~~~~~~~~~~ Query selectrs ~~~~~~~~~~~~~~~~~
let h1Title = document.querySelector(`#myTitle`);
console.log(h1Title);

let anotherDiv = document.querySelector(`.anotherDiv`);
console.log(anotherDiv);

let allDivs = document.querySelectorAll(`div`)
console.log(allDivs);

// nextElemntSibling
let myHeader = document.querySelector(`#myTitle`)
let nextSiblingToMyHeader = myHeader.nextElementSibling;
console.log(nextSiblingToMyHeader);

// priviousElementSibling
let text = document.querySelector(`#text`);
let nextSiblingText = text.previousElementSibling;
console.log(nextSiblingText);