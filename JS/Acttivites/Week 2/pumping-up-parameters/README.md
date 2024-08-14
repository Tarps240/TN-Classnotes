# Functions With Global Variables

### Setup

1. Navigate to this directory in your terminal.
2. Run `npm install -g mocha` to install the testing library (if you've already done this, skip this step!).
3. Preferably in a full-screen terminal, run `npm test` to start testing.

### Workflow

You'll be working in **`main.test.js`** this time!, creating the variables needed with the values asked for, according to the specifications given in the tests. Check your terminal for feedback on which aspect of the problem you have yet to complete, and read the specifications' actual code implementation for extra help; it makes explicit exactly what outputs are expected given the test inputs.

### Guidelines:

- Please do **not** call the functions; just declare them! You can call them for your own testing purposes, but then either delete or comment out the line.
- [ ] If you are asked to define a variable in terms of another, do not recalculate the value of that variable. For example, if x = 5, and y = 6, and z is supposed to be x + y, do NOT set y to equal 11 directly, or say that y should be 5 + 6. Use the variables instead.

### Tasks

Let's start by creating our variables so that we can manipulate them later on with functions.

- Create a variable called `x` and set it to the value 3.
- Create a variable called `y` and set it to the value 10.
- Create a variable called `z` and set it to the value 5.
- Create a variable called `name` and set it the string version of your first name.
- Create a variable called `greeting` and set it to the value `'HEY'`.

Now for some functions!

- Create a function called `multiply` that takes in one parameter and changes `x` to the product of `x` and that parameter.
- Create a function called `modYBy` that takes in one parameter, divides `y` by that parameter, and sets `y` to the remainder of that division. Look up the JavaScript modulus operator if you don't remember it, because it could sure come in handy here!
- Create a function called `opposite` that takes in a parameter and sets `z` to equal the opposite sign of that parameter. For example, if the function is passed `6`, `z` should be set to `-6`, and if passed `-85`, `z` should be set to `85`. Note that we are not "reading" the value of `z` here. In other words, unlike the other problems here, it doesn't matter what `z` used to be!
- Create a variable called `makeFullName` that takes in a string parameter and sets `name` to have that string at the end, with a space in the middle.
- Create a function called `yellAt` that takes in a string parameter and adds that string to the end of `greeting`, with a comma and a space in between and an exclamation point at the end. This string concatenation (pushing the strings together) should be set to be the new value of `greeting`.
