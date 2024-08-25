const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
//   const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//   Iterate 0 to 10 using for loop, do the same using while and do while loop
  
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// // Set team members to 10.
// const teamLimit = 10;

// // Start off with 0 people on the team.
// let team = 0;

// Initiate while loop to run until the team is full.
// while (team < teamLimit) {
// 	// add one teammate for each iteration
// 	team++;
// 	console.log(team);
// }

//Do while loop iterate 0 - 10.
// let result = '';
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 10);

// console.log(result);

//   Iterate 10 to 0 using for loop, do the same using while and do while loop
  
// For loop iteration 10 - 0.
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

//While loop 10 - 0.
// Set team members to 10.
const teamLimit = 10;

// Start off with 0 people on the team.
let team = 0;

// Initiate while loop to run until the team is full.
while (team < teamLimit) {
	// add one teammate for each iteration
	team++;
	console.log(team);
}

//   Iterate 0 to n using for loop
  



//   Write a loop that makes the following pattern using console.log():
  
//       #
//       ##
//       ###
//       ####
//       #####
//       ######
//       #######

let n = 7;

for (let i = 1; i <= n; i++) {
    let str = "#";
    console.log(str.repeat(i));
}


//   Use loop to print the following pattern:
  
//   0 x 0 = 0
//   1 x 1 = 1
//   2 x 2 = 4
//   3 x 3 = 9
//   4 x 4 = 16
//   5 x 5 = 25
//   6 x 6 = 36
//   7 x 7 = 49
//   8 x 8 = 64
//   9 x 9 = 81
//   10 x 10 = 100

for(let i = 0; i <= 10; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}




//   Using loop print the following pattern
  
//    i    i^2   i^3
//    0    0     0
//    1    1     1
//    2    4     8
//    3    9     27
//    4    16    64
//    5    25    125
//    6    36    216
//    7    49    343
//    8    64    512
//    9    81    729
//    10   100   1000

console.log("i\t i^2\t i^3");

for (let i = 0; i <= 10; i++) {
    console.log(`${i}\t ${i * i}\t ${i * i * i}`);
}


//   Use for loop to iterate from 0 to 100 and print only even numbers
  
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0){ //Check for even number.
      console.log(i); // Print result.
    }
  }

//   Use for loop to iterate from 0 to 100 and print only odd numbers
  
for (let i = 0; i <= 100; i++) {
  if (i % 2 != 0){ //Check for odd number.
    console.log(i); // Print result.
  }
}

//   Use for loop to iterate from 0 to 100 and print only prime numbers
  
for (let i = 0; i <= 100; i++) {
  let num = 0;
  // looping
  for (let j = 2; j < i; j++) {
      if (i % j == 0) {
          num = 1;
          break;
      }
  }

  if (i > 1 && num == 0) {
      console.log(i);
  }
}


//   Use for loop to iterate from 0 to 100 and print the sum of all numbers.
  
let resultA = 0;

for (let i = 0; i <= 100; i++) {
  resultA += i
}

console.log(`The sum of all numbers is ${resultA}`);

//   The sum of all numbers from 0 to 100 is 5050.
//   Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
  
// let resultE = 0
// let resultO = 0

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     resultE += i
//   } else {
//     resultO += i
//   }
// }

// console.log(`The sum of even numbers is: ${resultE}, and the sum of the odd numbers is ${resultO}.`);


//   The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
//   Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
  
//     [2550, 2500]

let resultE = 0;
let resultO = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    resultE += i
  } else {
    resultO += i
  }

}



//   Develop a small script which generate array of 5 random numbers

let randomArr = [];

for (let i = 0; i < 5; i++) {
  randomArr.push(Math.floor(Math.random() * 10000) + 1);
}

console.log(randomArr);

//   Develop a small script which generate array of 5 random numbers and the numbers must be unique
  
function uniqueRandomNumbers() {
  let numbers = [];

  while (numbers.length < 5) {
    let randomNumber = Math.floor(Math.random() * 10000) + 1;

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

    return numbers;

}

let randomArray = uniqueRandomNumbers();
console.log(randomArray);

//   Develop a small script which generate a six characters random id:
//   ie: 5j2khz

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}

console.log(generateString(6));