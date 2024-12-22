// Programa koja sto spored dadeno vreme ke ni kaze dali e morning,afternoon, night or evening

// 6 - 11 morning
// 11 - 18 afternoon
// 18 - 22 evening
// 22 - 6 night

let currentTime = new Date();
let currentHour = currentTime.getHours();

let hour = currentHour;

if (hour >= 6 && hour <= 11) {
    console.log(`Good Morning`);
} else if (hour >= 11 && hour <= 18) {
    console.log(`Good afternoon`);
} else if (hour >= 18 && hour <= 22) {
    console.log(`Good evening`);
} else {
    console.log(`Good night`);
}
