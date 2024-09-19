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
console.log(car3);
console.log(car4);

// Inheritance



// Overriding methods