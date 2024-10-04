// Function to check if a number is prime.

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Generate squares and append them to the HTML page.

function generateSquares() {
    const input = document.getElementById('numberInput').value;

// Check if input is a number and not empty.
    if (input === '' || isNaN(input)) {
        alert('Please enter a valid number.');
        return;
    };

    const container = document.getElementById('squareContainer');
    container.innerHTML = ''; // Clearing the previous squares.

for (let i = 1; i <= input; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent = i;

    // Apply color based on even, odd, or prime.
    if (isPrime(i)) {
        square.classList.add('prime');
    } else if (i % 2 === 0) {
        square.classList.add('even');
    } else {
        square.classList.add('odd');
    }

    // Append square to container.
    container.appendChild(square);

}

}