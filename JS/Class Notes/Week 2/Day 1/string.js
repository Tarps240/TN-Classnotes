///////////////////////////////////////////////Welcome To String///////////////////////////////
///////////////////////////////////////////primitive data type/////////////////////////////

//three different kinds of strings 
let city = 'Clarksville,';
let language = "American Sign Language";
let sentence = `is not very common here.`;

//concatinating 
let concatination = city + " " + language + " "+ sentence;
console.log(concatination);


///////////////////Escape sequence characters////////////////////////

//     \n: new line
//     \t: Tab, means 8 spaces
//     \\: Back slash
//     \\, Adds a comma (,)
//     \': Single quote (')
//     \": Double quote (")

var comment = "I hope everyone is enjoying the 30 Days Of JavaScript challenge. \nDo you ?"
var quote = "In every programming language it starts with \"Hello, World!\""
console.log(comment);
console.log(quote);
///////////////////////////////////String Methods ///////////////////////////////




///////accsesing the character P in my JS string 
//The way to accses characters in my string is using the index value. 
//ie:   "JavaScript"
/////////0123456789///////



////ascr
let js="Javascript";
////////0123456789///

js[8] = "t";
console.log(js[8]);

console.log(js.length);
console.log(js.length - 1);
console.log(js.toUpperCase());

///////////////////////////// Changing Data Type (Casting)////////////////////////////////
// Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.
// /////////////////////////////////String to Int//


let num = "10";
// parseInt()
// Number()
// Plus sign(+)


//let numInt = parseInt(11);
//let numInt = Number(num);
//let numInt = +num;
//console.log(numInt);

// ////////////////////////////////String to Float//
// parseFloat()
// Number()
// Plus sign(+)

let number = "9.81";
let numInt = parseFloat(number);
console.log(numInt);

// //////////////////////////////////Float to Int//
// parseInt()