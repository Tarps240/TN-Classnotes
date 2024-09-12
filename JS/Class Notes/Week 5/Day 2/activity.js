const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Explain the difference between forEach, map, filter, and reduce.

// forEach(): Iterate over elements, does not return a new array.
// map(): Transforms each element, returns a new array.
// filter(): Filters elements based on a condition, returns a new array.
// reduce(): Accumulates elements into a single value.
// Each function serves a specific use case in array manipulation and iteration.

// Define a callback function before you use it in forEach, map, filter or reduce.

// Define the callback function

function isOdd(num) {
  return num % 2 !== 0;
}

// Use the callback function in filter

const num1 = [1, 2, 3, 4, 5, 6];
const oddNumbers = num1.filter(isOdd);

console.log(oddNumbers);

// Use forEach to console.log each country in the countries array.

function logCountry(country) {
  console.log(country);
}

countries.forEach(logCountry);

// Use forEach to console.log each name in the names array.

function allNames(name1) {
  console.log(name1);
}

names.forEach(allNames);

// Use forEach to console.log each number in the numbers array.

function eachNumber(digit) {
  console.log(digit);
}

numbers.forEach(eachNumber);

// Use map to create a new array by changing each country to uppercase in the countries array.

const countriesToUppercase = countries.map((country) => country.toUpperCase());
  console.log(countriesToUppercase);

// const upperCaseCountries = countries.map((country) => country.toUpperCase());

// console.log(upperCaseCountries);

// Use map to create an array of countries length from countries array.

// const countriesLength = countries.length((country) => country.length());

// console.log(countriesLength);


// Use map to create a new array by changing each number to square in the numbers array

function squareNumber(num) {
  return num * num;
};

const squaredNumbers = numbers.map(squareNumber);
console.log(squaredNumbers);

// Use map to change to each name to uppercase in the names array

const uppercaseNames = names.map((name) => name.toUpperCase());
console.log(uppercaseNames);


// Use map to map the products array to its corresponding prices.

function getProductPrice(item) {
  return item.price;
}

const productPrices = products.map(getProductPrice);

console.log(productPrices);


// Use filter to filter out countries containing land.

const countriesContainingLand = countries.filter((country) => country.includes("land"));

console.log(countriesContainingLand);

// Use filter to filter out countries having six character.

const countriesHaveSixLetters = countries.filter((country) => country.length === 6);

console.log(countriesHaveSixLetters);

// Use filter to filter out countries containing six letters and more in the country array.

const countriesHaveSixMoreLetters = countries.filter((country) => country.length >= 6);

console.log(countriesHaveSixMoreLetters);

// Use filter to filter out country start with 'E'

const countriesNotStartingWithE = countries.filter(country => !country.startsWith('E'));

console.log(countriesNotStartingWithE);

// Use filter to filter out only prices with values.

const itemsWithPrices = products.filter(item => item.price != null);

console.log(itemsWithPrices);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists(arr) {
  return arr.filter(item => typeof item === 'string');
}

const mixedArray = [1, 'hello', true, 'world', 42, 'JavaScript', null];
const stringArray = getStringLists(mixedArray);

console.log(stringArray);


// Use reduce to sum all the numbers in the numbers array.

const sum = numbers.reduce((accum, currentValue) => accum + currentValue);

console.log(sum);

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries




// Explain the difference between some and every




// Use some to check if some names' length greater than seven in names array




// Use every to check if all the countries contain the word land




// Explain the difference between find and findIndex.




// Use find to find the first country containing only six letters in the countries array




// Use findIndex to find the position of the first country containing only six letters in the countries array




// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.




// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.



