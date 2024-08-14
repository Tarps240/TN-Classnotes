# If Learning

### Introduction

Today you'll be branching to return different results based on the parameters passed in--first using `if` statements, and then `if` with `else`. Time to really unlock the power of booleans!


### Tools You'll Use

* Full functions, with return values and parameters and the whole shebang.
* Basic booleans.
* Comparison operators (`===`, `>`, etc.).
* `if` and `if-else`.


### Workflow

* Copy and create a new repo.
* Run `npm test` in a terminal of your choosing (I prefer a full-screen one!).
* Code away in `main.js` until all your tests are passing.


### Tasks

* Write a function called `isItLong` that returns the string "That's a long string!" if the given string is longer than 20 characters. It should not return anything otherwise. (Explicitly, at least--every function returns `undefined` if you don't `return` a value!)
* Write a function called `isItMedium` that returns the string "That's a regular sized string!" if the given string is between 10 and 20 characters, inclusive. It should not return anything otherwise. 
* Write a function called `isItShort` that returns "That's a small string!" if the given string is shorter than 10 characters. Otherwise, it should return "That's not a small string!"
* Write a function called `howLongIsMyString` that returns:
  * the string "That's a long string!" if the given string is longer than 20 characters
  * the string "That's a regular sized string!" if the given string is between 10 and 20 characters, inclusive
  * the string "That's a small string!" if the given string is shorter than 10 characters
* Write a function called `personsHeight` that returns the height of your instructors, in inches. If given the string "Shaq" it should return the number `85`. If given the string "Zooey", it should return the number `65`. If given anything else, it should return the string "I don't know everyone's height!".
