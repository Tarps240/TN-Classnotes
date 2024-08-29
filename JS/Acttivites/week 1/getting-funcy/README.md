# Functions With Global Variables

### Setup

1. Navigate to this directory in your terminal.
2. Run `npm install -g mocha` if you have not yet done so to install the testing library.
3. Preferably in a full-screen terminal, run `npm test` to start testing.


### Workflow

You'll be working in `main.test.js`, creating the variables and functions needed, according to the specifications given in the Tasks section below. Check your terminal for feedback on which aspect of the problem you have yet to complete!


### Guidelines:

* Please do **not** call the functions; just declare them! You can call them to check for your own testing purposes, but then either delete or comment out the line. (Because our test code runs your function and modifies the global variables, checking if the variable has been changed to the value we'd expect, if you're calling your function and changing it ALSO, the test code will change the value a second time and, when it goes to check the value, it will not be what the test code is expecting.)
* If you are asked to define a variable in terms of another, do not recalculate the value of that variable. For example, if `x = 5`, and `y = 6`, and `z` is supposed to be the sum of `x` + `y`, do NOT set `y` to equal `11` directly. Use the `x` and `y` variables directly in that calculation instead.


### Tasks

Let's start by creating our variables so that we can manipulate them later on with functions. Create those variables at the top of your file, OUTSIDE of any functions.


##### Variables

* Create a variable named `x` and assign to it the value `3`.
* Create a variable named `y` and assign to it the value `10`.
* Create a variable called `z` and assign to it the value of `4`.
* Create a variable called  `greeting` and  assign to it the string 'hello'.
* Create a variable called  `firstName` and assign to it the string of your name.
* Create a variable called  `callStatus` and assign to it the string 'ringing'.



Now let's make these variables useful by writing some functions!


##### Functions

* Create a function named  `double` and have it double the value of `x`.
* Create a function named  `triple` and have it triple the value of `y`.
* Create a function named  `square` and have it square the value of `z`.
* Create a function named  `beNice` and have it change the value of greeting to the string 'hello' plus your name using the value of the variable `firstName`. You can include other characters if you wish to make it look like a nice sentence.
* Create a function named  `changeName` and have it change the value of `firstName` to the string 'Danger'.
* Create a function named  `hangUp` and have it change the value of `callStatus` to the string 'call ended'.
