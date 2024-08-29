# Objectively Funcy

What we're doing today is writing functions that can manipulate the object passed in.

## Setup

* Create Repo
* Clone
* Copy assignment contents
* Run the tests with `npm test`

## Tasks

* `getFirstName` - returns the value of the firstName property of the given person object
  * `getFirstName({firstName: 'John', lastName: 'Doe'}) // -> 'John'`
  * `getFirstName({firstName: 'Alice', lastName: 'Smith'}) // -> 'Alice'`

* `getLastName` - returns the value of the lastName property of the given person object
  * `getLastName({firstName: 'John', lastName: 'Doe'}) // -> 'Doe'`
  * `getLastName({firstName: 'Alice', lastName: 'Smith'}) // -> 'Smith'`

* `getFullName` - returns the value of the firstName property plus the lastName property with a space in the middle for the given person object
  * `getFullName({firstName: 'John', lastName: 'Doe'}) // -> 'John Doe'`
  * `getFullName({firstName: 'Alice', lastName: 'Smith'}) // -> 'Alice Smith'`

* `setFirstName` - changes the value of the firstName property of the given person object to the given value
  * `setFirstName({firstName: 'John', lastName: 'Doe'}, 'Michael') // -> {firstName: 'Michael', lastName: 'Doe'}`
  * `setFirstName({firstName: 'Alice', lastName: 'Smith'}, 'Olivia') // -> {firstName: 'Olivia', lastName: 'Smith'}`

* `setAge` - changes the value of the age property of the given person object to the given value
  * `setAge({firstName: 'John', lastName: 'Doe', age: 39}, 45) // -> {firstName: 'John', lastName: 'Doe', age: 45}`
  * `setAge({firstName: 'Alice', lastName: 'Smith', age: 29}, 35) // -> {firstName: 'Alice', lastName: 'Smith', age: 35}`

* `giveBirthday` - increments by 1 the age property of the given person object, or gives them an age of 1 if they don't have that property
  * `giveBirthday({firstName: 'John', lastName: 'Doe', age: 39}) // -> {firstName: 'John', lastName: 'Doe', age: 40}`
  * `giveBirthday({firstName: 'Alice', lastName: 'Smith', age: 29}) // -> {firstName: 'Smith', lastName: 'Smith', age: 30}`
  * `giveBirthday({firstName: 'Baby', lastName: 'Doe'}) // -> {firstName: 'Baby', lastName: 'Doe', age: 1}`

* `marry` - sets the marital status of both given people to `true` and sets each person's `spouseName` property to be the full name of the other

```
const person1 = { firstName: 'John', lastName: 'Doe', married: false };
const person2 = { firstName: 'Alice', lastName: 'Smith', married: false };

marry(person1, person2);

console.log(person1); // -> { firstName: 'John', lastName: 'Doe', married: true, spouseName: 'Alice Smith' }
console.log(person2); // -> { firstName: 'Alice', lastName: 'Smith', married: true, spouseName: 'John Doe' }
```

* `divorce` - changes the marital status to `false` and removes the `spouseName` property from both given people
```
const person1 = { firstName: 'John', lastName: 'Doe', married: true, spouseName: 'Alice Smith' };
const person2 = { firstName: 'Alice', lastName: 'Smith', married: true, spouseName: 'John Doe' };

marry(person1, person2);

console.log(person1); // -> { firstName: 'John', lastName: 'Doe', married: false}
console.log(person2); // -> { firstName: 'Alice', lastName: 'Smith', married: false}

```

## Tips

* For `getFullName`, don't set a `fullName` property on the given object. Just give the caller of the function back a new value based on the first name and last name
* For `giveBirthday`, you'll need to have some way to tell if the key `age` is already in the given person
* For `marry`, you can re-use your `getFullName` function in order to get each person's `spouseName`. Just pass in the person whose `fullName` you want, and you'll get back your new `spouseName` property
* Same as above for `divorce`; you'll need to research a way to REMOVE the key `spouseName` from the given people. Simply setting the properties to `undefined` or `null` won't be sufficient
