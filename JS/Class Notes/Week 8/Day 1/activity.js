
// Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
        constructor(name, age, color, legs) {
            this.name = name;
            this.age = age;
            this.color = color;
            this.legs = legs;
        }
    
        describe() {
            return `This is a ${this.age}-year-old ${this.color} animal named ${this.name} with ${this.legs} legs.`;
        }
    
        speak() {
            return `${this.name} makes a noise.`;
        }

        celebrateBirthday() {
                this.age += 1;
                return `${this.name} just turned ${this.age} years old!`;
        }

        getLegs() {
                return `${this.name} has ${this.legs} legs.`;
        }

 }
    
// Create a Dog and Cat child class from the Animal Class.

const dog = new Animal('Luna', 2, 'White', 4);
const cat = new Animal('Salem', 5, 'Black', 4);

// Print the objects created.
console.log(dog);
console.log(cat);

// Calling methods
console.log(cat.describe());
console.log(dog.speak());
console.log(dog.celebrateBirthday());
console.log(cat.getLegs());



// Override the method you created in the Animal class.
// You can override a method in a class by redefining it in a subclass.

class Dog extends Animal {
    constructor(name, age, color, legs, breed) {
        super(name, age, color, legs); // Call the parent class constructor
        this.breed = breed;            // Additional property specific to Dog
    }

    // Overriding the speak method
    speak() {
        return `${this.name} barks loudly!`;
    }
}

// Creating an instance of the Dog class
const myDog = new Dog('Buddy', 3, 'brown', 4, 'Labrador');

// Calling the overridden speak method
console.log(myDog.speak()); 

// Calling the inherited describe method
console.log(myDog.describe());



// Let's try to develop a program which calculates the measure of central tendency of a sample (mean, median, mode) and the measure of variability (range, variance, standard deviation). In addition to those measures, find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as methods for the Statistics class. Check the output below.
// ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]





// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
////////// you output should look like this
        // console.log(statistics.describe())
        // Count: 25
        // Sum:  744
        // Min:  24
        // Max:  38
        // Range:  14
        // Mean:  30
        // Median:  29
        // Mode:  (26, 5)
        // Variance:  17.5
        // Standard Deviation:  4.2
        // Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]






// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.incomes = []; // Array to hold income objects {amount, description}
      this.expenses = []; // Array to hold expense objects {amount, description}
    }
  
    // Method to calculate total income
    totalIncome() {
      return this.incomes.reduce((total, income) => total + income.amount, 0);
    }
  
    // Method to calculate total expenses
    totalExpense() {
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }
  
    // Method to return account information
    accountInfo() {
      return `Account Holder: ${this.firstname} ${this.lastname}, Total Income: $${this.totalIncome()}, Total Expenses: $${this.totalExpense()}`;
    }
  
    // Method to add income
    addIncome(amount, description) {
      this.incomes.push({ amount, description });
    }
  
    // Method to add expense
    addExpense(amount, description) {
      this.expenses.push({ amount, description });
    }
  
    // Method to calculate the account balance
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    }
  }
  
  // Example usage:
  const account = new PersonAccount("Scott", "Lewis");
  
  // Adding incomes
  account.addIncome(2000, "Salary");
  account.addIncome(500, "Freelance");
  
  // Adding expenses
  account.addExpense(300, "Rent");
  account.addExpense(200, "Groceries");
  
  // Display account info
  console.log(account.accountInfo()); 
  
  // Display account balance
  console.log(`Account Balance: $${account.accountBalance()}`); 
  