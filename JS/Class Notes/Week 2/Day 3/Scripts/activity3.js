// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
/////// Enter a number: 2
/////// 2 is an even number
/////// Enter a number: 9
/////// 9 is is an odd number.

const number = prompt("Enter a number to see if it's Even or Odd: ");

const result = (number % 2 == 0)
    ? "Even"
    : "Odd"

window.alert(`This number is ${result}!`);