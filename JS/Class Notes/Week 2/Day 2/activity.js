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
let Skyla = "Sister";
let Spenser = "Brother";
let Shawnice = "Cousin";
let Kenneth = "Step-Brother";

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

const py = "python";
const jar = "jargon";

console.log(`${py.length}`);
console.log(`${jar.length}`);


// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 True

console.log(4 > 3 && 10 < 12);

// 4 > 3 && 10 > 12 false

console.log(4 > 3 && 10 > 12);

// 4 > 3 || 10 < 12 true

console.log(4 > 3 || 10 < 12);

// 4 > 3 || 10 > 12 true

console.log(4 > 3 || 10 > 12);

// !(4 > 3) false

console.log(!(4 > 3));

// !(4 < 3) true

console.log(!(4 < 3));

// !(false) true

console.log(!(false));

// !(4 > 3 && 10 < 12) false

console.log(!(4 > 3 && 10 < 12));

// !(4 > 3 && 10 > 12) true
console.log(!(4 > 3 && 10 > 12));

// !(4 === '4') true

console.log(!(4 === '4'));

// There is no 'on' in both dragon and python



// Use the Date object to do the following activities.

// Access the Date operator and assign it to currentDate.
let currentDate = new Date();

// Access the Year within the Date and assign it to currentYear.
let currentYear = currentDate.getFullYear();

//Access and assign different attributes of Date() to variables to call later.
let currentMonth = currentDate.getMonth() + 1;
let todaysDate = currentDate.getDate();
let currentDay = currentDate.getDay() + 1;
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
// What is the year today?

console.log(currentYear);

// What is the month today as a number?

console.log(currentMonth);

// What is the date today?

console.log(todaysDate);

// What is the day today as a number?

console.log(currentDay);

// What is the hours now?

console.log(currentHour);

// What is the minutes now?

console.log(currentMinute);

// Find out the numbers of seconds elapsed from January 1, 1970 to now.

// Declare a new variable with new Date.
const epochTime = new Date();

// Call variable and print elapsed time from Epoch to the console. 
console.log(epochTime.getTime() / 1000);
