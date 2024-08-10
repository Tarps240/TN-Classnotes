// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/////// Enter your age: 30
/////// You are 5 years older than me.

const myAge = 25;
let yourAge = prompt("Enter your age:");
let difference = yourAge - myAge;

if(yourAge > myAge) {
    console.log("You are " + difference + " years older than me.");
} else{
    console.log("I'm older than you!");
}