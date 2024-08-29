const assert = require('assert');
const {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
} = require('./main.js');

describe('getFirstName', () => {
  it(`returns the first name of the given person`, () => {
    const person1 = {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      married: true,
      spouseName: 'Jane Doe'
    };

    const person2 = {
      firstName: 'Alice',
      lastName: 'Smith',
      age: 30,
      married: false,
    };

    assert.strictEqual(getFirstName(person1), 'John');
    assert.strictEqual(getFirstName(person2), 'Alice');
  });
});

describe('getLastName', () => {
  it(`returns the last name of the given person`, () => {
    const person1 = {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      married: true,
      spouseName: 'Jane Doe'
    };

    const person2 = {
      firstName: 'Alice',
      lastName: 'Smith',
      age: 30,
      married: false,
    };

    assert.strictEqual(getLastName(person1), 'Doe');
    assert.strictEqual(getLastName(person2), 'Smith');
  });
});

describe('getFullName', () => {
  it(`returns the first name and last name of the given person, with a space in the middle`, () => {
    const person1 = {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      married: true,
      spouseName: 'Jane Doe'
    };

    const person2 = {
      firstName: 'Alice',
      lastName: 'Smith',
      age: 30,
      married: false,
    };

    assert.strictEqual(getFullName(person1), 'John Doe');
    assert.strictEqual(getFullName(person2), 'Alice Smith');
  });
});

describe('setFirstName', () => {
  it('gives the given name to the person object as its firstName property', () => {
    const person1 = {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      married: true,
      spouseName: 'Jane Doe'
    };

    const person2 = {
      firstName: 'Alice',
      lastName: 'Smith',
      age: 30,
      married: false,
    };

    setFirstName(person1, 'Michael');
    assert.strictEqual(person1.firstName, 'Michael');
    setFirstName(person2, 'Olivia');
    assert.strictEqual(person2.firstName, 'Olivia');
  });
});

describe('setAge', () => {
  it('sets age on the given person', () => {
    const person1 = {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      married: true,
      spouseName: 'Jane Doe'
    };

    const person2 = {
      firstName: 'Alice',
      lastName: 'Smith',
      age: 30,
      married: false,
    };

    setAge(person1, 30);
    assert.strictEqual(person1.age, 30);
    setAge(person2, 35);
    assert.strictEqual(person2.age, 35);
  });
});

describe('giveBirthday', () => {
  it('ages the given person up by 1', () => {
    const person1 = {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      married: true,
      spouseName: 'Jane Doe'
    };

    const person2 = {
      firstName: 'Alice',
      lastName: 'Smith',
      age: 30,
      married: false,
    };

    giveBirthday(person1);
    assert.strictEqual(person1.age, 26);

    giveBirthday(person2);
    assert.strictEqual(person2.age, 31);
  });

  it('gives the person an age of 1 if they didn\'t previously have an age', () => {
    const baby = {
      firstName: 'Newborn',
      lastName: 'Doe',
    };

    giveBirthday(baby);
    assert.strictEqual(baby.age, 1);
  });
});

describe('marry', () => {
  it('sets the marital status of both given people to true', () => {
    const person1 = {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      married: false,
    };

    const person2 = {
      firstName: 'Alice',
      lastName: 'Smith',
      age: 30,
      married: false,
    };

    marry(person1, person2);
    assert.strictEqual(person1.married, true);
    assert.strictEqual(person2.married, true);
  });

  it('sets the spouse of each given person to be the full name of the other', () => {
    const person1 = {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      married: false,
    };

    const person2 = {
      firstName: 'Alice',
      lastName: 'Smith',
      age: 30,
      married: false,
    };

    marry(person1, person2);
    assert.strictEqual(person1.spouseName, 'Alice Smith');
    assert.strictEqual(person2.spouseName, 'John Doe');
  });
});

describe('divorce', () => {
  it('sets the marital status of both people to false', () => {
    const person1 = {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      married: true,
      spouseName: 'Jane Doe'
    };

    const person2 = {
      firstName: 'Alice',
      lastName: 'Smith',
      age: 30,
      married: true,
      spouseName: 'John Doe'
    };

    divorce(person1, person2);
    assert.strictEqual(person1.married, false);
    assert.strictEqual(person2.married, false);
  });

  it('removes the spouseName property entirely from both people', () => {
    const person1 = {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      married: true,
      spouseName: 'Jane Doe'
    };

    const person2 = {
      firstName: 'Alice',
      lastName: 'Smith',
      age: 30,
      married: true,
      spouseName: 'John Doe'
    };

    divorce(person1, person2);
    assert.strictEqual(person1.spouseName, undefined);
    assert.strictEqual(person2.spouseName, undefined);
    assert.strictEqual('spouseName' in person1, false);
    assert.strictEqual('spouseName' in person2, false);
  });
});
