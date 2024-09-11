///////////////////////////// Functional Programming//////////////////////////
// forEach
// Purpose of foreach method, it executes a provided method once for each element in the array. Or it simply preforms an action for each element.
const numArr = [1, 2, 3, 4, 5];

let sum1 = 0;

numArr.forEach(num => sum1 += num);

console.log(sum1);

const countries = ["USA", "China", "Hong Kong", "Japan"];

countries.forEach((Element) => console.log(Element.toUpperCase()));

// numArr.forEach(number => 
//     console.log(number));

// map
// transforms each element of an array and returns a new array with the transformed elements. Unlike the for each, Map returns a new array.

const double = numArr.map(num => num * 2);

console.log(double);

const names = ["Scott", "Renee", "Pandora", "Persephone", 12];

const namesToUppercase = names.map((name) => name.toUpperCase());

console.log(namesToUppercase);


// filter
// filters an array by applying a test function, keeping only the element that pass the test, creates a new array of elements that return true that pass the test function. 

const numbers = [12, 24, 36, 48, 51];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);

const countries1 = ["Sweden", "UAE", "Dubai", "Finland", "Greenland", "Ireland", "Iceland", "Germany", "Japan", "Chile", "Egypt", "Haiti", "China", "Italy"];

const countriesContainingLand = countries1.filter((country) => country.includes("land"));

const countriesHaveFiveLetters = countries1.filter((country) => country.length === 5);

console.log(countriesHaveFiveLetters);

console.log(countriesContainingLand);

const scores = [
    { name: "Alex", score: 95},
    { name: "Nicklas", score: 98},
    { name: "Evgeni", score: 80},
    { name: "Renee", score: 50},
    { name: "Yuki", score: 85},
    { name: "Miho", score: 100}
];

const scoresGreaterThan80 = scores.filter((score) => score.score >= 80);

console.log(scoresGreaterThan80);

// reduce
// Reduces an array to a single value, by running a function on each element. With an accumulator keeping track of the ongoing result. The result of the function is stored in an accumulator which gets updated each time the function runs.

const primes = [1, 2, 3, 4];

const sum = primes.reduce((acc, num) => acc + num, 0 );

console.log(sum);

// every
// Checks if ALL elements in the array pass a test function. Returns a boolean, true if all elements pass the test, false if otherwise.

const evenNum = [1, 4, 7, 8, 10, 9];

const allEven = evenNum.every(num => num % 2 === 0);

console.log(allEven);

const areAllString = names.every((name) => typeof name === "string");

console.log(areAllString);

// find
//Returns the first element that passes the test function. Stops running as soon as it finds the element that passes the test.

const firstEven = evenNum.find(num => num % 2 === 0);

console.log(firstEven);



// findIndex
// Returns the index of the first element that passes the test. Returns the index of the matching element or a -1 if no match is found.

const newArr = [1, 2, 3, 4];

const firstEvenIndex = newArr.findIndex(num => num % 2 === 0);

console.log(firstEvenIndex);

const ages = [12, 22, 45, 81, 95, 21];

const age = ages.findIndex(age => age < 20);

console.log(age);

const result = names.findIndex(name => name.length > 7);

console.log(result);

// some //
// Definition: The some method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if any element passes the test; otherwise, it returns false.

// Usage: Used to check if at least one element in an array meets a condition.
const numbers7 = [1, 2, 3];
const hasEven = numbers7.some((num) => num % 2 === 0); // true

// sort //
// Definition: The sort method sorts the elements of an array in place and returns the sorted array. The default sort order is based on converting elements to strings and comparing their sequences of UTF-16 code unit values.

// Usage: Used to sort arrays alphabetically, numerically, or based on custom criteria. Sorting can be unstable for large arrays.
const fruits = ["banana", "apple", "orange"];
fruits.sort(); // ['apple', 'banana', 'orange']

// Sorting string values //
// Definition: When sorting strings, the sort method compares the UTF-16 code unit values of the characters. For more complex sorting, such as case-insensitive sorting, a custom comparison function can be provided.
const words = ["Banana", "apple", "Orange"];
words.sort((a, b) => a.localeCompare(b)); // ['apple', 'Banana', 'Orange']

// Sorting Numeric values //
// Definition: When sorting numbers, you must pass a comparison function because the default sort method converts numbers to strings, which can lead to incorrect sorting.

// Usage: You provide a custom comparison function to ensure proper numerical sorting.
// const numbers = [10, 5, 20, 3];
// numbers.sort((a, b) => a - b); // [3, 5, 10, 20]

// Sorting Object Arrays //
// Definition: Sorting an array of objects requires a comparison function that determines how two objects should be compared, typically by comparing specific properties of the objects.

// Usage: Commonly used when working with arrays of complex objects and sorting by specific fields.
const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];
people.sort((a, b) => a.age - b.age);
// [{ name: 'Alice', age: 25 }, { name: 'John', age: 30 }, { name: 'Bob', age: 35 }]
