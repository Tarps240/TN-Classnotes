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


// Declare an empty array;

let arr = [];

// Declare an array with more than 5 number of elements

let recipies = ["Coq au Vin", "Steak au Poivre", "Nasi Goreng", "Bechamel", "Mournay", "Gratin Dauphinoise", "Chicken Provencal"];

// Find the length of your array

// let findLength = recipies.length;
// console.log(findLength);

// Get the first item, the middle item and the last item of the array

//access array.
let items = recipies;

//Get items from array.

// console.log(items[0]);
// console.log(items[3]);
// console.log(items[6]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = [NaN, true, 7, "Scott", "Renee", false, 10, "Apple", "Phone", undefined, null];

// let typesLength = mixedDataTypes.length;
// console.log(typesLength);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// Print the array using console.log()

// console.log(itCompanies);

// Print the number of companies in the array

// let companyLength = itCompanies.length;
// console.log(companyLength);

// Print the first company, middle and last company

// console.log(itCompanies[0]);
// console.log(itCompanies[3]);
// console.log(itCompanies[6]);

// Print out each company

// console.log(itCompanies);

// Change each company name to uppercase one by one and print them out

// itCompanies = itCompanies.map(function (e) { 
//   return e.toUpperCase()
// });

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
// itCompanies.splice(6, 0, " and");
// console.log(itCompanies.toString() + " are big IT companies.");

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

// if (itCompanies.includes("Google")) {
//   console.log("Google");
// } else {
//   console.log("Company not found.")
// }

// Filter out companies which have more than one 'o' without the filter method


// Sort the array using sort() method

// itCompanies.sort();
// console.log(itCompanies);

// Reverse the array using reverse() method

// itCompanies.reverse();
// console.log(itCompanies);

// Slice out the first 3 companies from the array

// const result = itCompanies.slice(0, 3);
// console.log(result);

// Slice out the last 3 companies from the array

// const result1 = itCompanies.slice(4, 7);
// console.log(result1);

// Slice out the middle IT company or companies from the array

// const middle = itCompanies.slice(3, 4);
// console.log(middle);

// Remove the first IT company from the array

// const first = itCompanies.shift();
// console.log(first);

// Remove the middle IT company or companies from the array

const x = itCompanies.splice(3, 1);

// console.log(`Array values after removing middle object: ${itCompanies}`);
// console.log(`Middle company in array: ${x}`);

// Remove the last IT company from the array

// const last = itCompanies.pop();
// console.log(last);

// Remove all IT companies

// itCompanies = [];
// console.log(itCompanies);

// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age

let sortedAges = ages.sort(function (a, b) {
  return a - b;
})

//get the minimum value
const minimumValue = sortedAges[0];
console.log(minimumValue);

// get the maximum value.
const maximumValue = sortedAges[sortedAges.length - 1];
console.log(maximumValue);

// Find the median age(one middle item or two middle items divided by two)

function median(ages) {
  // Sort the array
  ages.sort((a, b) => a - b);

  const length = ages.length;
  const middle = Math.floor(length / 2);

  // Check if the array length is even or odd
  if (length % 2 === 0) {
      // If even, return the average of middle two elements
      return (ages[middle - 1] + ages[middle]) / 2;
  } else {
      // If odd, return the middle element
      return ages[middle];
  }
}

console.log(median(ages));

// Find the average age(all items divided by number of items)

function getAverage(ages) {
  let sum = 0;
  for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
  }
  return sum / ages.length;
}

console.log(getAverage(ages))

// Find the range of the ages(max minus min)

let averageAges = maximumValue - minimumValue;
console.log("There is a " + averageAges + " year spread.");