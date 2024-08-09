// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = "Scott";
const lastName = "Lewis";
const country = "USA";
const city = "Clarksville";
const age = 43;
const isMarried = "yes";
const year = 2024;

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

// Check if type of '10' is equal to 10

const num = '10';
const num1 = 10;


console.log(typeof num == typeof num1);

// Check if parseInt('9.8') is equal to 10

let num2 = parseInt('9.8');
let num3 = 10;

console.log(typeof(num2) === typeof(num3));

// Boolean value is either true or false.

let isRenee = false;
let isScottie = true;

console.log(isRenee);
console.log(isScottie)

// Write three JavaScript statement which provide truthy value.

const lightOn = true;
const mySiblings = [Skyla, Spenser, Kenneth, Shawnice];
const inClass = 1;

// Write three JavaScript statement which provide falsy value.

let myKeys;
let herWeight = null;
let ourSong = undefined;

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 true
console.log(4 > 3);

// 4 >= 3 true
console.log(4 >= 3);

// 4 < 3 false
console.log(4 < 3);

// 4 <= 3 false
console.log(4 <= 3);

// 4 == 4 true
console.log(4 == 4);

// 4 === 4 true
console.log(4 === 4);

// 4 != 4 false
console.log(4 != 4);

// 4 !== 4 false
console.log(4 !== 4);

// 4 != '4' false
console.log(4 != '4');

// 4 == '4' true
console.log(4 == '4');

// 4 === '4' false
console.log(4 === '4');


// Find the length of python and jargon and make a falsy comparison statement.

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 True
// 4 > 3 && 10 > 12 false
// 4 > 3 || 10 < 12 true
// 4 > 3 || 10 > 12 true
// !(4 > 3) false
// !(4 < 3) true
// !(false) true
// !(4 > 3 && 10 < 12) true
// !(4 > 3 && 10 > 12) false
// !(4 === '4') true



// There is no 'on' in both dragon and python



// Use the Date object to do the following activities.

// Access the Date operator and assign it to currentDate.
let currentDate = new Date();

// Access the Year within the Date and assign it to currentYear.
let currentYear = currentDate.getFullYear();

//Access the Month within the Date and add 1 since it starts at 0, assign it to currentMonth.
let currentMonth = currentDate.getMonth() + 1;

// What is the year today?

console.log(currentYear);

// What is the month today as a number?

console.log(currentMonth);

// What is the date today?

console.log(Date());

// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.