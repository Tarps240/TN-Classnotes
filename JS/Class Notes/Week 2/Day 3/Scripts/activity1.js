// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
/////// Enter your age: 30
/////// You are old enough to drive.
/////// Enter your age:15
/////// You are left with 3 years to drive.

// Setup prompt for age inputs

let age = prompt("Enter your age:");
let userAge = 18;
let difference = userAge - age;

// if else statements

if(age > 18) {
    console.log("You are old enough to drive.");
} else {
    console.log("You have " + difference +  " years until you can drive.");
}