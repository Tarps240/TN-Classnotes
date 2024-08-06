// Using console.log() print out the following statement:
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

console.log("'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");


// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

const num = '10';
const num1 = 10;


console.log(typeof num !== num1);


// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let num2 = parseFloat('9.8')
let num3 = 10

console.log(typeof(num2) === typeof(num3));


// Check if 'on' is found in both python and jargon

const str = "python";
const str1 = "jargon";

const substr = 'on';

console.log(str.includes(substr));
console.log(str1.includes(substr));

// I hope this course is not full of jargon. Check if jargon is in the sentence.

const str2 = "I hope this course is not full of jargon";
const check = "jargon";

console.log(str2.includes(check));


// Generate a random number between 0 and 100 inclusively.

const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min
  }

const randomNumber2 = getRandomNumber(0, 100)

console.log(randomNumber2)


// Generate a random number between 50 and 100 inclusively.

const getRandomNumber2 = (min, max) => {
    return Math.random() * (max - min) + min
  }

const randomNumber3 = getRandomNumber2(50, 100)

console.log(randomNumber3)


// Generate a random number between 0 and 255 inclusively.

const getRandomNumber3 = (min, max) => {
    return Math.random() * (max - min) + min
  }

const randomNumber4 = getRandomNumber3(0, 255)

console.log(randomNumber4)


// Access the 'JavaScript' string characters using a random number.

let string = 'JavaScript'
let fourthLetter = string[3]
console.log(fourthLetter);


//Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

const block = "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125"

console.log(block);