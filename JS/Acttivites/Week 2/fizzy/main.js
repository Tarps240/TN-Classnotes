/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

function fizzy(n) {

  const fizzBuzz = []

  for (i = 1; i <= n; i++) {
    if (i % 15 == 0) fizzBuzz.push("FizzBuzz")
    else if (i % 5 == 0) fizzBuzz.push("Buzz")
    else if (i % 3 == 0) fizzBuzz.push("Fizz")
    else fizzBuzz.push(i.toString())  
  }
    return fizzBuzz
};

console.log(fizzy(100));

// // first task - print numbers from 1 - 100.
// for (let i = 1; i <= 100; i++) {
//   // for numbers divisible by 3 print Fizz. (3, 6, 9, 12)
//   if (i % 3 == 0) {
//   // for numbers divisible by 5 print Buzz. (5, 10, 15, 20)
//   // for numbers divisible by 3 and 5 print FizzBuzz. (15, 30, 45, 60)
//   // for numbers divisible by none of the above, print the number.
//  }
// } 
  // for numbers divisible by 3 print Fizz. (3, 6, 9, 12)
  // for numbers divisible by 5 print Buzz. (5, 10, 15, 20)
  // for numbers divisible by 3 and 5 print FizzBuzz. (15, 30, 45, 60)
  // for numbers divisible by none of the above, print the number.





/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
