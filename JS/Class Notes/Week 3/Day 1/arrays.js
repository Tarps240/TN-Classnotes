///////////////////////////////////////////////Welcome To Arrays///////////////////////////////
///////////////////////////////////////////Non-primitive data type/////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
// How to create an empty array. 
// This the most recommended way to create an empty list. Here is a general syntax
// let arr=[]
// const arr = Array()
// const arr = new Array()



//////////////////////////////////////////////////////////////////////////////////////////////
// How to create an array with values



//.........................................To Do..............................................
//Create an array with values and then console log the list and its length  
// array of numbers

// let numbers = [3, 7, 9]

// array of strings, fruits
// let fruits = ["Apple", "Dragonfruit", "Durian", numbers]

// array of web technologies

let webTech = ["JavaScript", "MySQL", "PHP", "React", "Bootstrap", "CSS", "Ruby", "Node", "Angular", "Java", "HTML5"];

// /////////////////////////////////////////////////////////////////////////////////////////////
// Creating an array using split

// let js = "JavaScript";
// let splitJS = js.split("");
// console.log(splitJS);

//.........................................To Do..............................................
//For the two strings use a split method to conosole.log and see the list of arrays



let str = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let splitStr = str.split(" ");
console.log(splitStr);


// /////////////////////////////////////////////////////////////////////////////////////////////
//Accessing array items using index

// const fruits = ['banana', 'orange', 'mango', 'lemon']
//index of Fruit//////0/////////1////////2////////3////

let teams = ["Capitals", "Predators", "Red Wings", "Devils", "Avalanche"];``

console.log(teams[0]);

//.........................................To Do..............................................
//console how many are in  my shoping bag, just accsess and print potato, Milk and sugar. Replace Avocado with Onion
const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
  ] // List of food products


//Get length of array.
let listLength = shoppingCart.length;
console.log(listLength);

//Access and Print Potato, Milk, Sugar.
let noStock = shoppingCart;
console.log(noStock[3]);
console.log(noStock[0]);
console.log(noStock[7]);

//Change Avocado to Onion
let index = 4;
let replacement = "Onion";
shoppingCart[index] = replacement;
console.log(shoppingCart);


//////////////////////////////////////////////////////////////////////////////////////////////
// Modifying array element
const numbers = [1, 2, 3, 4, 5]
/////////////////0//1//2




//////////////////////////////////////////////////////////////////////////////////////////////
// Methods to manipulate array

let firstList = [1, 2, 3, 4];
let secondList = [5, 6, 7, 8];
let combined = firstList.concat(secondList);

console.log(combined);

console.log(firstList.indexOf(3));
console.log(combined.indexOf(6));
console.log(Array.isArray(firstList));

//Convert array to string.

console.log(typeof firstList.toString());
console.log(teams.toString());

//Join arrays
// console.log(firstList.join("! "));
// console.log(shoppingCart.join(" "));
// console.log(secondList.join("joined"));
// console.log(teams.join(7));
// console.log(firstList.join(teams));

//Slice arrays
// console.log(teams.slice(1));
// console.log(teams.slice(2, 5));

//splice arrays
// shoppingCart.splice(3 , 0, "Bread", "Beer");
// console.log(shoppingCart);

//Push to the end of array
teams.push("Tampa", "Dallas");
console.log(teams);

//Pop array method remove item from end of array

shoppingCart.pop();
console.log(shoppingCart);

//Shift method remove first item from array

//teams.shift();
console.log(teams);

//Unshift adds an element to the start of the array

teams.unshift("Orlando");
console.log(teams);

//Getting index an element in arr array (To check if an item exist in an array.)

//console.log(teams.includes("Flyers"));

//Getting index an element in arr array (To check if an item exist in an array.)

//console.log(teams.includes("Predators"));

//Array of arrays

let Score = [
  ["Renee", 20, 60, "A"],
  ["Scott", 10, 52, "B"],
  ["Lisa", 5, 24, "F"],
  ["Pandora", 28, 43, "A"],
  ["Persephone", 16, 51, "B"]
];
console.log(Score);