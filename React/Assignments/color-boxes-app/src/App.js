import React from 'react';
import './App.css';

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

// React component for the Number Squares
function NumberSquares() {
  const squares = [];
  
  for (let i = 1; i <= 100; i++) { // Adjust range as needed
    const squareStyle = {
      backgroundColor: isPrime(i) ? 'red' : i % 2 === 0 ? 'green' : 'yellow',
    };

    squares.push(
      <div key={i} className="square" style={squareStyle}>
        {i}
      </div>
    );
  }

  return <div className="container">{squares}</div>;
}

function App() {
  return (
    <div className="App">
      <h1>Number Squares App</h1>
      <NumberSquares />
    </div>
  );
}

export default App;