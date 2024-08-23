# Playing with Strings

Let's do some string building!

Start off by creating a repo for this assignment, then in  `main.js`, you'll write a series of functions.


### Guidelines

* Other than `.toUpperCase` and `.toLowerCase`, don't use any string methods. Sure, `.slice` would be nice here, or `.repeat`. But you'll learn just a ton more if you use actual loops!

### Task

Your task is to write a series of functions that execute the following tasks:

* `xify` - returns the same string, but with every character replaced by an 'x'
  * Examples:
    * xify('hello') -> 'xxxxx'
    * xify('hi there') -> 'xxxxxxxx'
* `yellingChars` - returns the given string with an exclamation point after each character
  * Examples:
    * yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
    * yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
  * Hints:
    * We can add more than one thing to the string each time through the loop. In this case, it's the current character AND an exlamation point.
* `indexedChars` - adds the index of each character before that character in the given string
  * Examples:
    * indexedChars('hello') -> '0h1e2l3l4o'
    * indexedChars('bye') -> '0b1y2e'
  * Hints: 
    * We can add something BEFORE the current character as well!
* `numberedChars` - adds the number of each character before that character in the given string
  * Examples:
    * numberedChars('hello') -> '(1)h(2)e(3)l(4)l(5)o'
    * numberedChars('bye') -> '(1)b(2)y(3)e'
  * Hints: 
    * there's a simple relationship between the index and the number... indices are 0-based counting and numbers are 1-based... you'll figure it out!
* `exclaim` - returns the given sentence with every question mark or period changed to an exclamation point
  * Examples:
    * exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
    * exclaim('This is fine.') -> 'This is fine!'
* `repeatIt` - returns the given string repeated `n` times, where `n` is the second parameter
  * Examples:
    * repeatIt('beetlejuice', 3) -> 'beetlejuicebeetlejuicebeetlejuice'
    * repeatIt('oh hi!', 8) -> 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!'
* `truncate` - shortens a long string to 15 characters plus an ellipsis (...)
  * Examples:
    * truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
    * truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."
* `ciEmailify` - creates an email from a two-part name
  * Examples:
    * ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
    * ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'
* `reverse` - reverses the given string
  * Examples:
    * reverse('colin') -> 'niloc'
    * reverse('mesuara') -> 'arausem'
* `onlyVowels` - returns only the vowels from a word
  * Examples:
    * onlyVowels('Colin Jaffe') -> 'oiae'
    * onlyVowels('quickly') -> 'ui'
    * onlyVowels('Anthony DeRosa') -> 'Aoeoa'

## Extra stretch goals

* `crazyCase` - returns the given string with alternating lower and upper cases
  * Examples:
    * crazyCase('hello') -> 'hElLo'
    * crazyCase('multiple words here') -> 'mUlTiPlE WoRdS HeRe'
    * crazyCase('YELLING') -> 'yElLiNg'
* `titleCase` - returns a transformed version of the given string where every word starts with a capital letter and every non-word-starting letter is lowercased
  * Examples:
    * titleCase('return of the king') -> 'Return Of The King'
    * titleCase('cOde iMMerSives') -> 'Code Immersives'
* `camelCase` - returns the given string in camel case
  * Examples:
    * camelCase('oh Hello') -> 'ohHello'
    * camelCase('well yeah of course') -> 'wellYeahOfCourse'
    * camelCase('Boy howdy') -> 'boyHowdy'
* `crazyCase2ReturnOfCrazyCase` - same as `crazyCase`, but does NOT count spaces as letters to upper or lower case (see examples below!)
  * Examples:
    * crazyCase2ReturnOfCrazyCase('multiple words here') -> 'mUlTiPlE wOrDs HeRe'
    * crazyCase2ReturnOfCrazyCase('crazy stuff') -> 'cRaZy StUfF'
