let phoneIphone11 = {
    name: `Iphone 11`,
    model: 11,
    company: `Apple`,
    dispplay: 6.1,
};

console.log(phoneIphone11);
console.log(phoneIphone11.name);

const currentYear = new Date().getFullYear();
// console.log(currentYear);

let angel = {
    firstName: `Angel`,
    lastName: `Krstevski`,
    birthYear: 2007,

    getAge: function () {
        return currentYear - this.birthYear;
    },

    getFullName: function () {
        console.log(`This is full name ${this.firstName} ${this.lastName}`);
    }
}

console.log(angel);
console.log(angel.lastName);
console.log(angel.getAge());
angel.getFullName();
