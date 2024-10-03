// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to dynamically create squares with numbers
function createNumberSquares() {
    const container = document.querySelector('.container');
   
    for (let i = 1; i <= 100; i++) { // Adjust the range as needed
        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = i;

        // Set background color based on the number type
        if (isPrime(i)) {
            square.style.backgroundColor = 'red'; // Prime numbers
        } else if (i % 2 === 0) {
            square.style.backgroundColor = 'green'; // Even numbers
        } else {
            square.style.backgroundColor = 'yellow'; // Odd numbers
        }

        container.appendChild(square);
    }
}

// Call the function to create the number squares
createNumberSquares();

