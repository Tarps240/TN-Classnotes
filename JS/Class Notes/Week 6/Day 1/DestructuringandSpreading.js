////////////////////////////// Destructuring and Spread/////////////////////////////////
// Destructing Arrays

const numbers = [1, 4, 7, 67, 34, 23, 56];

let [one, four, seven, sixSeven, threeFour, twoThree, fiveSix] = numbers;

console.log(seven, threeFour, fiveSix);

const fullStack = [
    [
        "HTML", "JavaScript", "CSS"
    ],
    [
        "Node", "Express", "MangoDB"
    ]
];

let [frontEnd, backEnd] = fullStack;

// console.log(frontEnd[1]);


// Destructuring during iteration


// for (let i = 0; i < fullStack.length; i++ ){
//     for (let y = 0; y < fullStack[i].length; y++) {
//         if (fullStack[i][y] === "JavaScript") {
//             console.log(fullStack[i][y]);
//         }
//     }

// }

// for (let i = 0; i < frontEnd.length; i++) {
//     if (frontEnd[i] === "JavaScript") {
//         console.log(frontEnd[i]);
//     }
// }

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];

for (const [country, city] of countries) {
    console.log(city);
}



// Destructuring Object

const rectangle = {
    width: 20,
    height: 10,
    area: 200
}

// let {width, height, area} = rectangle;

// console.log(rectangle["area"]);
// console.log(rectangle.height);
// console.log(area);

// Renaming during structuring

let {width: w, height: h, area: a} = rectangle;

console.log(h);

// Object parameter without destructuring



// Object parameter with destructuring



// Destructuring object during iteration



// Spread or Rest Operator



// Spread operator to get the rest of array elements



// Spread operator to copy array



// Spread operator to copy object

    // Spread operator with arrow function