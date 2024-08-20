/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

let fizzy = function (n) {

  const fizzBuzz = []

  for (i = 1; i <= n; i++) {
    if (i % 15 == 0) fizzBuzz.push("FizzBuzz")
    else if (i % 5 == 0) fizzBuzz.push("Fizz")
    else if (i % 3 == 0) fizzBuzz.push("Buzz")
    else fizzBuzz.push(i.toString())  
  }
    return fizzBuzz
};

console.log(fizzy(100));


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
