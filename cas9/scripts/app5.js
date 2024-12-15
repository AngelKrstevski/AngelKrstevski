let points = parseInt(prompt(`Plese enter your points`));

// && - points < 100 i points > 81
// || - uslov1 ili uslov2

if(points <= 100 && points >= 81) {
    console.log(`You have grade 5`);
} else if(points <= 80 && points >= 61){
    console.log(`You have grade 4`);
} else if(points <= 60 && points >= 41) {
    console.log(`You have grade 3`);
} else if(points <= 40 && points >= 21) {
    console.log(`You have grade 2`);
} else if(points <= 20 && points >= 0) {
    console.log(`You have grade 1`);
} else {
    alert(`Please enter positive number`);
}