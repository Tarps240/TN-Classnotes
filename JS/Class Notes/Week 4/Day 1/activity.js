// Declare a function fullName and it print out your full name.

// function fullName() {
//     console.log("Scott Lewis");
// }

// fullName()

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
};

fullName("Scott", "Lewis");

// Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(x, y) {
    let sum = x * y;
    console.log(sum);
}

addNumbers(2, 9);

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function rectArea(l, w) {
    let rect = l * w;
    console.log(rect);
}

rectArea(10, 5);

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function rectPerimiter(t, n) {
    let perim = 2 * (t + n);
    return perim;
}
console.log(rectPerimiter(6, 9));
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function prismVolume(len, wid, hei) {
    let vol = len * wid * hei;
    return vol;
}

console.log(prismVolume(2, 8, 5));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

const radius = 5;
const area = calculateCircleArea(radius);
console.log(`The area of the circle is: ${area}`);



// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function calculateCircleCircumference(radius) {
    
    return 2 * Math.PI * radius;
}

const circumference = calculateCircleCircumference(radius);

console.log(`The circumference of the circle is: ${circumference}`);

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function calculateDensity(mass, volume) {
    return mass / volume;
}

console.log(`The density of the substance is: ${calculateDensity(500, 100)}`);

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function calculateSpeed(distance, time) {
    return distance / time;
}

console.log(`The speed of the moving object is: ${calculateSpeed(100, 5)} Meters per second.`);

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function calculateWeight(mass, gravity) {
    
    if (isNaN(gravity)) {
        throw new Error('Invalid gravity value');
    }
    return mass * gravity;
}

console.log(`The weight of the substance is: ${calculateWeight(50, 9.81)} Newtons.`);

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let temperatureInCelsius = 50;
let temperatureInFahrenheit = convertCelsiusToFahrenheit(temperatureInCelsius);
console.log(`${temperatureInCelsius}°C is ${temperatureInFahrenheit}°F`);

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    // The same groups apply to both men and women.
    // Underweight: BMI is less than 18.5
    // Normal weight: BMI is 18.5 to 24.9
    // Overweight: BMI is 25 to 29.9
    // Obese: BMI is 30 or more

    function calculateBMI(weight, height) {

        // Calculate BMI
        const bmi = weight / (height * height);
    
        // Determine the BMI category
        let category;
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = "Overweight";
        } else if (bmi >= 30) {
            category = "Obese";
        }
    
        // Return the BMI value and category
        return { bmi: bmi.toFixed(2), category: category };
    }
    
    const result = calculateBMI(70, 1.75);

    console.log(`BMI: ${result.bmi}, Category: ${result.category}`);
    


// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {

    // Convert the month to lowercase to handle case-insensitive input
    month = month.toLowerCase();

    // Determine the season based on the month
    let season;
    switch (month) {
        case 'september':
        case 'october':
        case 'november':
            season = 'Autumn';
            break;
        case 'december':
        case 'january':
        case 'february':
            season = 'Winter';
            break;
        case 'march':
        case 'april':
        case 'may':
            season = 'Spring';
            break;
        case 'june':
        case 'july':
        case 'august':
            season = 'Summer';
            break;
        default:
            season = 'Invalid month';
    }

    return season;
}

console.log(checkSeason('April'));  // Output: Spring

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
    // console.log(findMax(0, 10, 5))
    // 10
    // console.log(findMax(0, -10, -2))
    // 0

    function findMax(a, b, c) {

        let max;    
        if (a >= b && a >= c) {
            max = a;
        } else if (b >= a && b >= c) {
            max = b;
        } else {
            max = c;
        }
    
        return max;
    }
    
    console.log(findMax(10, 20, 15));