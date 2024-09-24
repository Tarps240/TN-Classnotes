// Write code to create a function that returns the factorial of `num`

// Function to pass in a number to factor.
function factorial(num) {
    // Check if the number is negative, since factorials are not defined for negative numbers
    if (num < 0) {
      return "Factorial is not defined for negative numbers.";
    }
  
    // Initialize result as 1
    let result = 1;
    
    // Loop from 2 to num, multiplying the result by each number
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
  
    // Return the calculated factorial value
    return result;
  }
  
//  console.log(factorial(5));  // Output: 120

 // Recursion is a function that calls itself. Breaks down problems into smaller manageble sub-problems, each time it calls itself.
 // 1. the recursive funtion
 // 2. the base case. the base case is the condition that stops the recursive call.
 // 3. the recursive case, continues the recursion by calling itself with modified input.
 // The basecase stops the recusion and prevents an infinit loop.
 // calls itself to solve the smaller version of the problem. 
 // create the function.

 function factorial2 (num) {
    if (num <= 1) {
        return 1;
    }
    return num * factorial2(num - 1);
 }

 console.log(factorial2(5));

 