/*

Your code goes below.

*/





/*********************************************************************************************************************

 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof x === 'undefined') {
  x = undefined;
}

if (typeof y === 'undefined') {
  y = undefined;
}

if (typeof z === 'undefined') {
  z = undefined;
}

if (typeof name === 'undefined') {
  name = undefined;
}

if (typeof greeting === 'undefined') {
  greeting = undefined;
}


if (typeof multiply === 'undefined') {
  multiply = undefined;
}

if (typeof modYBy === 'undefined') {
  modYBy = undefined;
}

if (typeof opposite === 'undefined') {
  opposite = undefined;
}

if (typeof makeFullName === 'undefined') {
  makeFullName = undefined;
}

if (typeof yellAt === 'undefined') {
  yellAt = undefined;
}

if (typeof fullName === 'undefined') {
  fullName = undefined;
}

if (typeof phoneCall === 'undefined') {
  phoneCall = undefined;
}


const assert = require('assert');

describe('multiply', () => {
  it(`multiplies x by the given parameter`, () => {
    multiply(15);
    multiply(3);
    assert.strictEqual(x, 135, 'x should be 45');
  });
});

describe('modYBy', () => {
  it(`runs a modulus operation on y`, () => {
    modYBy(4);
    assert.strictEqual(y, 2, 'y should be 2');
  });
});

describe('opposite', () => {
  it(`sets z to the opposite of the given parameter`, () => {
    opposite(3);
    assert.strictEqual(z, -3, 'z should be -3');
  });
});

describe('makeFullName', () => {
  it(`adds a space and the parameter to name`, () => {
    let oldName = name;
    makeFullName('Rose');
    assert.strictEqual(name, oldName + ' Rose', 'name should be the full name');
  });
});

describe('yellAt', () => {
  it(`makes greeting into a string that yells the greeting at someone`, () => {
    yellAt('Kyle');
    assert.strictEqual(greeting, 'HEY, Kyle!', 'greeting should be yelled');
  });
});

