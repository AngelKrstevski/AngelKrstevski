let date = parseInt(prompt(`Please enter a number of a week`));

switch (date) {
    case 1:
        console.log(`Today is Mon`);
        break;
    case 2:
        console.log(`Today is Thu`);
        break;
    case 3:
        console.log(`Today is Wen`);
        break;
    case 4:
        console.log(`Today is Thr`);
        break;
    case 5:
        console.log(`Today is Fri`);
        break;
    case 6:
        console.log(`Today is Sat`);
        break;
    case 7:
        console.log(`Today is Sun`);
        break;
    default:
        alert(`Please enter a day between 1 - 7`);
        break;
}

// 1,2,3,4,5...10
// 0,1,2,3,4