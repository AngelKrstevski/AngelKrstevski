// Programa koj sto za vneseni poeni treba da ni vrati ocenka

// 100 - 90 = A
// 90 - 80 = B
// 80 - 70 = C
// 70 - 60 = D
// 60 - 0 = F

let score = parseInt(prompt(`Please enter your score`));

if (score >= 90 && score <= 100) {
    console.log(`Your score is ${score} and your grade is A`);
} else if (score >= 80) {
    console.log(`Your score is ${score} and your grade is B`);
} else if(score >= 70) {
    console.log(`Your score is ${score} and your grade is C`);
} else if(score >= 60) {
    console.log(`Your score is ${score} and your grade is D`);
} else if(score >= 0) {
    console.log(`Your score is ${score} and your grade is F`);
} else {
    console.log(`Please enter a valid score`);
}