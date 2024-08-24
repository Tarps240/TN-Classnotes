/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
// Long string function.
function isItLong(inputStr) {
  if (inputStr.length > 20) {
    return "That's a long string!"
  }
}

// Medium string function.

function isItMedium(medStr) {
  if (medStr.length >= 10 && medStr.length <= 20) {
      return "That's a regular sized string!";
  }
  // Don't return anything if the condition isn't met.
}

// Short string function.

function isItShort(shortStr) {
  if (shortStr.length < 10) {
    return "That's a small string!"
  } else {
    return "That's not a small string!";
  }
}

// Function to calculate string length.

function howLongIsMyString(inputString) {
  return inputString.length;
}

// Function to calculate persons height.

/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof personsHeight === 'undefined') {
  personsHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  personsHeight,
}