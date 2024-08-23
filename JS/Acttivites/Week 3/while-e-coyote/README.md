# `while-e-coyote?`

> In this exercise, we'll do some practice with while loops! Although you could probably figure out how to do this without while loops, please don't! Use a while loop :)

## Set up

* Create a repository
* Run the tests with `npm test`

## Instructions

Write a series of functions in `main.js` that make the tests pass.

### `numberDoubler`

Write a function, `numberDoubler` that takes in a number and continues doubling until the number is greater than or equal to 100.

**Examples**:
```
numberDoubler(51)  => 102
numberDoubler(100) => 100
numberDoubler(26)  => 104
```

### `stringRepeater`

Write a function, `stringRepeater` that takes in a string and "repeats it" until the string's length is greater than or equal to 10.

**Examples**:
```
stringRepeater('abc')    => 'abcabcabcabc'
stringRepeater('a')      => 'aaaaaaaaaa'
stringRepeater('hotdog') => 'hotdoghotdog'
```

### `makeDivisible`

Write a function, `makeDivisible`, that takes in two numbers, x and y. The function should add one to x until it is divisible by y. Then return x.

**Examples**:
```
makeDivisible(9, 1)  => 9
makeDivisible(9, 2)  => 10
makeDivisible(11, 3) => 12
makeDivisible(10, 3) => 12
makeDivisible(5, 4)  => 8
makeDivisible(16, 5) => 20
```

