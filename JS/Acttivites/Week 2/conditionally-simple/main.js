/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

let longStr = "That's a long string!";

function isItLong() {
  if (longStr.length > 20) {
    return "That's a long string!";
  } else if (longStr.length <= 20); {
    return `undefined`;
  } 
};

let mediumStr = "That's a regular sized string!"

function isItMedium() {
  if (mediumStr > 10 && mediumStr < 20) {
    return "That's a regular sized string!"
  } 
}


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