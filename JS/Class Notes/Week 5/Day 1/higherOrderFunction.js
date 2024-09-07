// ///////////////////////////Higher Order Function/////////////////////////////
// Callback

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function(number) {
  return number * 2;  // Callback
});

console.log(doubled);


// Returning function
function createMultiplier(multiplier) {
    // Returns a new function
    return function (num) {
      return num * multiplier;
    };
  }
  
  // Using the higher-order function to create specific functions

  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  
  console.log(double(5)); 
  console.log(triple(5)); 
  

// Setting time
    // Setting Interval using a setInterval function

    // Function to be called at intervals
function sayHello() {
    console.log("Hello, World!");
  }
  
  // Call the function every 2 seconds (2000 milliseconds)
  const intervalId = setInterval(sayHello, 2000);
  
  // Stop the interval after 10 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }, 10000);  // 10 seconds
  
    
    // Setting a time using a setTimeout

    function createDelayedLogger(message) {
        return function () {
          console.log(message);
        };
      }
      
      // Use setTimeout with the higher-order function
      const delayedLogger = createDelayedLogger("Hello after 3 seconds!");
      
      // The returned function will be executed after 3000 milliseconds (3 seconds)
      setTimeout(delayedLogger, 3000);
      