# `money-is-no-object`

> Working with objects! We'll write some functions that show us the power and flexibility of objects. As usual start of by:
* Create your repo
* Clone it to your computer
* run `npm install` to install the jest dependency
* run `npm test` to run the tests

## 1. `isAdmin`

Write a function, `isAdmin` that takes in a user object and returns true if the user is an admin,
as indicated by their `userRole` key. All admins' `userRole` attributes are equal to `'ADMIN'`.

A user object will look like this:
```
{
    firstName: String,
    lastname: String,
    userRole: String
}
```

**Examples**
```
isAdmin({
    firstName: 'Eileen',
    lastName: 'Smith',
    userRole: 'REGULAR_USER'
})
=> false

isAdmin({
    firstName: 'Ian',
    lastName: 'Rogers', 
    userRole: 'USER_MANAGER'
})
=> false

isAdmin({
    firstName: 'Jeff',
    lastName: 'Wilson', 
    userRole: 'ADMIN'
})
=> true
```

## 2. `getEmail`

Write a function, `getEmail`, that given a user object, return the users' Persevere email. We'll assume that a Persevere email is always in `firstInitialLastName.prsvr@gmail.com` form.

**Examples**
```
getEmail({
    firstName: 'Kyle'
    lastName: 'Rose'
})
=> 'krose.prsvr@gmail.com'

getEmail({
    firstName: 'Jason',
    lastName: 'Doty'
})
=> 'jdoty.prsvr@gmail.com'
```

## 3. `getPlaylistLength`

Write a function, `getPlaylistLength` that takes in a playlist and returns the number of songs in the playlist

A playlist object will look like this:
```
{
    name: 'my jams',
    songs: ['Vienna', 'Hey Ya!']
}
```

**Examples**
```
getPlaylistLength({
    name: 'hits',
    songs: ['The Distance', 'Ruby Tuesday', 'Old Town Road (remix)']
})
=> 3

getPlaylistLength({
    name: 'empty playlist',
    songs: []
})
=> 0
```

## 4. `getHardestHomework`

Write a function, `getHardestHomework` that takes in an array of homework objects and returns the name of 
the hardest homework assignment. The hardest homework will be the one that has the lowest average score. If the array contains no homeworks, return an empty string.

**Examples**

```
getHardestHomework([])
=> ''

getHardestHomework([
    { name: 'homework 1', averageScore: 99 },
    { name: 'homework 2', averageScore: 1 }
])
=> 'homework 2'

getHardestHomework([
    { name: 'hip-hip-array', averageScore: 12 },
    { name: 'wait-i-object', averageScore: 200 },
    { name: 'objective-reasoning', averageScore: 25 }
])
=> 'hip-hip-array'
```

## 5. `createPhonebook`

Write a function, `createPhonebook`, that creates a phonebook object from an array of names
and phone numbers.

**Examples**
```
createPhonebook(['Jimothy', 'Maria', 'Karl'], ['123-456-7890', '000-000-0000', '999-888-7766'])
=> {
    'Jimothy': '123-456-7890',
    'Maria': '000-000-0000',
    'Karl': '999-888-7766'
}

createPhonebook(['Melissa', 'Andre'], ['206-111-2233', '321-123-2424'])
=> {
    'Melissa': '206-111-2233',
    'Andre': '321-123-2424'
}

createPhonebook([], []);
=> {}
```

