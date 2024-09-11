// Create an empty object called dog

// const dog = {

// };

// Print the the dog object on the console

// console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

const dog = {
    name: 'Max',
    legs: 4,
    color: 'brown',
    age: 3,
    bark: function() {
        return 'Woof woof!';
    }
}

// Get name, legs, color, age and bark value from the dog object

console.log(dog.name);

console.log(dog.legs);

console.log(dog.color);

console.log(dog.age);

console.log(dog.bark());

// Set new properties the dog object: breed, getDogInfo

dog.breed = 'Labrador';

dog.getDogInfo = function() {
    return `Name: ${this.name}, Color: ${this.color}, Age: ${this.age}, Breed: ${this.breed}`;
}