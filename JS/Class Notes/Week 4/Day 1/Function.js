/////////////////////////////////////JS Functions///////////////////////////////
//A function is a reusable block of code or programming statements designed to perform a certain task. 
//A function is declared by a function key word followed by a name, followed by parentheses (). 
//A parentheses can take a parameter. If a function take a parameter it will be called with argument. 
//A function can also take a default parameter. To store a data to a function, a function has to return certain data types. 
//To get the value we call or invoke a function. Function makes code:

// Function Declaration

function sayHello() {

}


// Function without a parameter and return

function parameterlessFunction() {
        return;
}


// Function returning value

function returnValue() {
        console.log("Hello World");
}

returnValue();

// Function with a parameter

function withParameter(firstName) {
        console.log("Hello " + firstName + "!");
}

withParameter("Scott");

// Function with two parameters



// Function with many parameters



// Function with unlimited number of parameters
        // Unlimited number of parameters in regular function
        function unlimitedParams() {
                for (let i = 0; i < arguments.length; i++) {
                    console.log(arguments[i]);
                }
            }
            
            unlimitedParams(1, "Pain au Chocolate", "Steak Au Poivre", "Coq Au Vin", null, undefined);

        function sumOfAllNumbers() {
            let sum = 0;
                for (let i = 0; i < arguments.length; i++) {
                    sum += arguments[i];
                }
                console.log(sum);
        }
        
        sumOfAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

            // Unlimited number of parameters in arrow function
        function unlimitedParams(...args) {
                args.forEach(arg => {
                    console.log(arg);
                });
            }
            
            unlimitedParams(false, 7, "Apple", "hello", true);


        // function square(n) {
        //     return n * n;
        // }
            
        // console.log(square(5));

        const square = (n) => {
            return n * n;
        }

        console.log(square(8));

// Anonymous Function

const myFunction = function() {
        console.log("This is an anonymous function!");
    };
    
    myFunction();

// Expression Function

 (() => {
        console.log("This is an expression function!");
    })();


// Self Invoking Functions

    (function() {
        console.log("This is a self invoking function!");
    })();


// Arrow Function


    const myArrowFunction = () => {
        console.log("This is an arrow function!");
    };
    
    myArrowFunction();

// Function with default parameters

//Class

function greetings (defaultName = "Jane Doe") {
    let introduction = `Hello ${defaultName}`;
    return introduction;
}

console.log(greetings);

// Mine
    function defaultParams(name = "World") {
        console.log("Hello " + name + "!");
    }
    
    defaultParams();
    defaultParams("Scott");


// Function declaration versus Arrow function
  
    // Arrow function is anonymous and does not have its own name.
    // Arrow function can't be called with new keyword.
    // Arrow function does not have its own arguments object.
    // Arrow function does not have its own this keyword.
    // Arrow function does not have its own prototype property.
    // Arrow function does not have its own super keyword.
    // Arrow function does not have its own context (this) when called as a method.
    // Arrow function does not have its own context (this) when called as a constructor.
    // Arrow function does not have its own context (this) when called as a callback function.
    // Arrow function does not have its own context (this) when called as an event handler.
    // Arrow function does not have its own context (this) when called as a method of an object.
    // Arrow function does not have its own context (this) when called as a method of a class.