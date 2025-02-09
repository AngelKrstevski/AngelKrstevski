let hotel = new Object();

hotel.name = `Meriot`;
let name = hotel.name;

hotel.numberOfRooms = 100;
let numberOfRooms = hotel.numberOfRooms;

hotel.numberOfStars = 5;
let numberOfStars = hotel.numberOfStars;

hotel.bookedRooms = 60;
let bookedRooms = hotel.bookedRooms;

hotel.getNumberOfFreeRoom = function () {
    return numberOfRooms - bookedRooms;
}

console.log(hotel);
console.log(hotel.getNumberOfFreeRoom());