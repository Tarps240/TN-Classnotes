// const car1 = {
//     make: "Honda",
//     model: "Accord",
//     year: 1998,
//     color: "Taupe",
//     awd: false
// };

// const car2 = {
//   make: "Mercedes",
//   model: "CLS55",
//   year: 2006,
//   color: "Black",
//   awd: true,
// };

// Classes
// Defining a class

class car {
  // Class Constructor
  // Default values with constructor
  constructor(make = "Honda", model = "CRV", year = 2024, color = "Blue", awd = true, inventory = 0) {
    (this.make = make),
      (this.model = model),
      (this.year = year),
      (this.color = color),
      (this.awd = awd),
      (this.inventory = 0);
  }

  getCarInfo() {
  let info = `This car is a ${this.year}, ${this.make} ${this.model}. We have ${this.inventory} in stock. They are ${this.color}.`
    return info;
  };

// Class methods
// getSpeed (terrain) {
//   if (terrain == "city") {
//     return `25 Miles per gallon.`
//   } else if (terrain == "highway") {
//     return `40 Miles per gallon.`
//   }
// };


// getter
get getInventory () {
  return this.inventory
}


// setter
set setInventory (newInventory) {
  this.inventory += newInventory;
};

}

// Class Instantiation

const car1 = new car("Honda", "Civic", 1999, "Yellow", false, 4);
const car2 = new car("Ford", "Fusion", 2002, "Green", true, 3);
const car3 = new car("Mercedes", "CLS55", 2006, "Black", false, 10);
const car4 = new car();

car1.setInventory = 5;
car2.setInventory = 2;
car3.setInventory = 9;


console.log(car1);
console.log(car2);
console.log(car3.getCarInfo());
console.log(car4);

// Inheritance

class trucks extends car {
  constructor(make, model, year, color, AWD, inventory, loadWeight, doors, bedSize, towingCapacity, wheels) {
    super(make, model, year, color, AWD, inventory);
    this.loadWeight = loadWeight;
    this.doors = doors;
    this.bedSize = bedSize;
    this.towingCapacity = towingCapacity;
    this.wheels = wheels;
  }

  getCarInfo() {
    let baseInfo = super.getCarInfo();
    return `${baseInfo} With trucks, there are specific features you need to look for, for ${this.make} ${this.model}'s we have a loadweight of ${this.loadWeight} and a towing capacity of ${this.towingCapacity}. They have ${this.doors} doors and ${this.wheels} wheels. Finally, they have a ${this.bedSize} load bed.`
  }

} 

const ranger = new trucks ("Ford", "Ranger", 1999, "green", false, 2, 1200, 2, "7ft", 2000, 4);

console.log(ranger.getCarInfo());


class sedan extends car {
  constructor(make, model, year, color, AWD, inventory, engineSize, batteryPower, driveTrain, cargoSpace) {
    super (make, model, year, color, AWD, inventory);
    this.engineSize = engineSize;
    this.batteryPower = batteryPower;
    this.driveTrain = driveTrain;
    this.cargoSpace = cargoSpace;
  }
}

class convertible extends car {
  constructor(make, model, year, color, AWD, inventory, topMaterial, numberOfSeats, rollBar) {
    super (make, model, year, color, AWD, inventory);
    this.topMaterial = topMaterial;
    this.numberOfSeats = numberOfSeats;
    this.rollBar = rollBar;
  }

}

class suv extends car {
  constructor(make, model, year, color, AWD, inventory, numberOfSeats, clearance) {
    super (make, model, year, color, AWD, inventory);
    this.numberOfSeats = numberOfSeats;
    this.clearance = clearance;
  }

}

// Overriding methods

