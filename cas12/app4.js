function Phone(brand, model, screenSize, storage, cameraMp, ramMemory, batteryCapacity, procesor, chargingWats) {
    this.brand = brand;
    this.model = model;
    this.screenSize = screenSize;
    this.storage = storage;
    this.cameraMp = cameraMp;
    this.ramMemory = ramMemory;
    this.batteryCapacity = batteryCapacity;
    this.procesor = procesor;
    this.chargingWats = chargingWats;

}

let redmi11 = new Phone(`Xiomi Redmi`, 11, 6.43, 128, 50, 4, 5000, `SnapDragon 680`, 33);

console.log(`Phone brand ${redmi11.brand}`);
console.log(`Phone model ${redmi11.model}`);
console.log(`Phone size ${redmi11.screenSize}inch`);
console.log(`Phone storage ${redmi11.storage}gb`);
console.log(`Phone camera ${redmi11.cameraMp}mp`);
console.log(`Phone ram memory ${redmi11.ramMemory}gb`);
console.log(`Phone battery capacity ${redmi11.batteryCapacity}mAh`);
console.log(`Phone procesor ${redmi11.procesor}`);
console.log(`Phone charging wats ${redmi11.chargingWats}W`);