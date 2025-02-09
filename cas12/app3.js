// Constructor function
const currentYear = new Date().getFullYear();

function Person(firstName, lastName, birthYear, haveGlasses, finishedPrimarySchool) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.haveGlasses = haveGlasses;
    this.finishedPrimarySchool = finishedPrimarySchool;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
    this.getAge = function () {
        return currentYear - birthYear;
    }
}

let angel = new Person(`Angel`, `Krstevski`, 2007, true, true);
let alek = new Person(`Alek`, `Ancevski`, 2012, false, false);
console.log(angel.getFullName());
console.log(angel.getAge());
console.log(alek.getAge());

console.log(angel);
console.log(alek);