
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

// Create an instance of the Statistics class and pass a dataset (data) as an argument. The constructor stores this data in the this.data property so that it can be accessed by the methods in the class.
class Statistics {
  constructor(data) {
    this.data = data;
  }

  // This method returns the number of elements in the dataset.
  // this.data.length counts how many items (numbers) are in the dataset.
  count() {
    return this.data.length;
  }

  // This method calculates the total sum of all elements in the dataset.
  // The reduce function loops through the dataset, adding up each element (val) to an accumulator (acc). The 0 at the end is the initial value of the accumulator.
  sum() {
    return this.data.reduce((acc, val) => acc + val, 0);
  }

  // Find the minimum value in the dataset
  // The Math.min() function returns the smallest value from a list of numbers. The ...this.data (spread operator) is used to pass the numbers as individual arguments to Math.min().

  min() {
    return Math.min(...this.data);
  }

  // Find the maximum value in the dataset.
  // It works similarly to min(), but it uses Math.max() to get the largest value.

  max() {
    return Math.max(...this.data);
  }

  // Calculate the range of the dataset
  // This method calculates the range (difference between the maximum and minimum values).
  // It subtracts the smallest value (this.min()) from the largest value (this.max()).

  range() {
    return this.max() - this.min();
  }

  // Calculate the mean (average) of the dataset.
  // It divides the sum of all the values (this.sum()) by the number of values (this.count()). The result is rounded using Math.round() to get a whole number.

  mean() {
    return Math.round(this.sum() / this.count());
  }


  // Calculate the median of the dataset, the middle value in a sorted list.
  // It first sorts the dataset in ascending order (sorted).
  // It finds the middle index (mid).
  // If the dataset has an odd number of elements, the middle value is returned.
  // If it has an even number of elements, it calculates the average of the two middle values.

  median() {
    const sorted = [...this.data].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      return Math.round((sorted[mid - 1] + sorted[mid]) / 2);
    } else {
      return sorted[mid];
    }
  }

  // Create a frequency object that keeps track of how often each number appears in the dataset.
  // This method finds the highest frequency (maxFrequency) and the number(s) that appear this many times (modes).
  // Then the first mode and its frequency are returned.

  mode() {
    const frequency = {};
    this.data.forEach(value => {
      frequency[value] = (frequency[value] || 0) + 1;
    });
    const maxFrequency = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency).filter(key => frequency[key] === maxFrequency);
    return { mode: Number(modes[0]), count: maxFrequency };
  }

  // Calculate the variance of the dataset
  // It calculates the difference between each value and the mean (val - mean), squares it (** 2), and stores those squared differences in an array.
  // Then, it sums all the squared differences and divides by the number of elements (this.count()).
  // The result is rounded to 1 decimal place using toFixed(1).

  variance() {
    const mean = this.mean();
    const squaredDifferences = this.data.map(val => (val - mean) ** 2);
    const variance = squaredDifferences.reduce((acc, val) => acc + val, 0) / this.count();
    return variance.toFixed(1);
  }

  // Calculate the standard deviation of the dataset
  // It calculates the variance (this.var()) and then takes the square root of that value using Math.sqrt(). The result is also rounded to 1 decimal place.

  stdDev() {
    return Math.sqrt(this.variance()).toFixed(1);
  }

  // Calculate the frequency distribution of the dataset.
  // It counts how often each value appears in the dataset (frequency).
  // Then, it converts those frequencies into percentages and stores them as pairs of [percentage, value].
  // Finally, it sorts the distribution by frequency in descending order.

  frequencyDistribution() {
    const frequency = {};
    this.data.forEach(value => {
      frequency[value] = (frequency[value] || 0) + 1;
    });

    const distribution = Object.keys(frequency).map(key => {
      return [(frequency[key] / this.count()) * 100, Number(key)];
    });

    return distribution.sort((a, b) => b[0] - a[0]);
  }

  // This method summarizes all the statistical information of the dataset in a readable format.
  // It calls all the individual methods like count(), sum(), min(), mean(), etc.
  // It formats the frequency distribution using freqDistFormatted.
  // The result is returned as a string that describes the dataset with all the relevant statistics.

  describe() {
    return `
      Count: ${this.count()}
      Sum: ${this.sum()}
      Min: ${this.min()}
      Max: ${this.max()}
      Range: ${this.range()}
      Mean: ${this.mean()}
      Median: ${this.median()}
      Mode: (${this.mode().mode}, ${this.mode().count})
      Variance: ${this.variance()}
      Standard Deviation: ${this.stdDev()}
      Frequency Distribution: ${JSON.stringify(this.frequencyDistribution())}
    `;
  }
}

// Example usage:
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

const statistics = new Statistics(ages);

console.log(statistics.describe());

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.variance()) // 17.5
console.log('Standard Deviation: ', statistics.stdDev()) // 4.2
console.log('Variance: ',statistics.variance()) // 17.5
console.log('Frequency Distribution: ',statistics.frequencyDistribution()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]


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
  