// Import the required modules to handle localStorage in the VSCode console.

// The first if statement checks if localStorage has been created already. If not, it uses the node-localStorage module to create a new instance of LocalStorage.
if (typeof localStorage === 'undefined' || localStorage === null) {

    //this line imports/requires the LocalStorage module.
    var LocalStorage = require ('node-localStorage').LocalStorage;

    // Create a new instance of LocalStorage at the specified path './scratch'.
    localStorage = new LocalStorage('./scratch');
};

// Store your first name, last name, age, country, city in your browser localStorage.

const individual = {
    firstName: 'Scott',
    lastName: 'Lewis',
    age: 43,
    country: 'USA',
    city: 'Clarksville'
};

localStorage.setItem('student', JSON.stringify(individual));

// Retrieve your first name, last name, age, country, city from your browser localStorage and display them in your browser console.

const retrievedIndividual = JSON.parse(localStorage.getItem('student'));

// Display the retrieved information in the console.
console.log(`First Name: ${retrievedIndividual.firstName}`);



// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student2 = {
    fName: 'Scottie',
    lName: 'Lewis',
    age: 43,
    skills: ['JavaScript', 'HTML', 'CSS'],
    country: 'USA',
    enrolled: 'Yes',
}

localStorage.setItem('studentObject', JSON.stringify(student2));

const retrievedStudentObject = JSON.parse(localStorage.getItem('studentObject'));

console.log(`First Name: ${retrievedStudentObject.lName}`);

// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = {
    firstName: 'John',
    lastName: 'Doe',
    incomes: [],
    expenses: [],
    
    // Method to calculate total income
    totalIncome: function() {
      return this.incomes.reduce((acc, income) => acc + income.amount, 0);
    },
  
    // Method to calculate total expenses
    totalExpense: function() {
      return this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
    },
  
    // Method to display account info
    accountInfo: function() {
      return `Account Holder: ${this.firstName} ${this.lastName}\nTotal Income: $${this.totalIncome()}\nTotal Expenses: $${this.totalExpense()}\nAccount Balance: $${this.accountBalance()}`;
    },
  
    // Method to add income
    addIncome: function(description, amount) {
      this.incomes.push({ description, amount });
    },
  
    // Method to add expense
    addExpense: function(description, amount) {
      this.expenses.push({ description, amount });
    },
  
    // Method to calculate account balance
    accountBalance: function() {
      return this.totalIncome() - this.totalExpense();
    }
  };
  
  // Example usage:
  
  // Adding some income
  personAccount.addIncome('Salary', 5000);
  personAccount.addIncome('Freelance', 1500);
  
  // Adding some expenses
  personAccount.addExpense('Rent', 1000);
  personAccount.addExpense('Groceries', 300);
  
  // Display account information
  console.log(personAccount.accountInfo());