// Converting with json

let person = {
    firstName: "Angel",
    lastName: "Krstevski",
    age: 17,
    isWeringGlasses: true,
    progragraminLanguages: ["JS","C#","Python"],
}

console.log(person);

let jsonPerson = JSON.stringify(person);
console.log(jsonPerson);

let parsePerson = JSON.parse(jsonPerson);
console.log(parsePerson);

let personHeader = document.querySelector(`#personInfo`);

personHeader.innerHTML = `
   First Name: ${parsePerson.firstName} Last Name: ${parsePerson.lastName} Age: ${parsePerson.age}
`