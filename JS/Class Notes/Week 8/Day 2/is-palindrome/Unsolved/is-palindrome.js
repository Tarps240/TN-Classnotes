// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

function isPalindrome(str) {
    // Convert the string to lowercase and remove all non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
  
    // Check if the cleaned string is equal to its reversed version
    return cleanedStr === reversedStr;
  }
  
  // Example usage:
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
  console.log(isPalindrome("hello")); // Output: false