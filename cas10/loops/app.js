let arrayOfNumber = [1, 2, 3, 4, 5];
console.log(arrayOfNumber);
let arrayOfNumberLength = arrayOfNumber.length;
console.log(arrayOfNumberLength);

let arrayOfStrings = ['Angel', 'Alek', 'Mouse'];
console.log(arrayOfStrings);

let mixArr = [12, 'Strings', 323, `random text`];
console.log(mixArr);

console.log(mixArr[0] = 15);
console.log(mixArr[1]);
console.log(mixArr[2]);
console.log(mixArr[3]);

console.log(mixArr);

let arrOfArrys = [[`Angel`, `Krstevski`, 17], [`Alek`, `Ancevski`, 12]];
console.log(arrOfArrys[0][1]); // Krstevski
console.log(arrOfArrys[1][2]); // 12
console.log(arrOfArrys[0][0]); // Angel

// Push - dodava elemnt na krajot od nizata 
// Pop - trga elemnt vo krajot na nizata

let randomNumberArr = [123, 23, 223, 223, 223, 223, 22, 32, 345, 47, 6756, 7];

randomNumberArr.push(55);
randomNumberArr.pop();
randomNumberArr.pop();
randomNumberArr.pop();

randomNumberArr.unshift(12);
randomNumberArr.unshift(32);
randomNumberArr.unshift(113);

console.log(randomNumberArr);

randomNumberArr.shift()
randomNumberArr.shift()
randomNumberArr.shift()
randomNumberArr.shift()
randomNumberArr.shift()

console.log(randomNumberArr);

let numbers = [1, 2, 3];
console.log(numbers.reverse());
numbers.shift();
console.log(numbers);