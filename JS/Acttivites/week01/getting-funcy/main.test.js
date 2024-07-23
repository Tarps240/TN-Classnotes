/**********************************
 * YOUR CODE GOES HERE THIS TIME! *
 **********************************/



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

if (typeof greeting === 'undefined') {
  greeting = undefined;
}

if (typeof firstName === 'undefined') {
  firstName = undefined;
}

if (typeof callStatus === 'undefined') {
  callStatus = undefined;
}

if (typeof double === 'undefined') {
  double = undefined;
}

if (typeof triple === 'undefined') {
  triple = undefined;
}

if (typeof square === 'undefined') {
  square = undefined;
}

if (typeof beNice === 'undefined') {
  beNice = undefined;
}

if (typeof changeName === 'undefined') {
  changeName = undefined;
}

if (typeof hangUp === 'undefined') {
  hangUp = undefined;
}


const assert = require('assert');

describe('double', () => {
  it(`doubles x`, () => {
    double();
    assert.strictEqual(x, 6);
  });
});

describe('triple', () => {
  it(`triples y`, () => {
    triple();
    assert.strictEqual(y, 30);
  });
});

describe('square', () => {
  it(`squares the variable z`, () => {
    square();
    assert.strictEqual(z, 16);
  });
});

describe('beNice', () => {
  it(`says hello to the person with the first name in firstName`, () => {
    beNice();
    assert.strictEqual(true, greeting.includes('hello') && greeting.includes(firstName));
  });
});

describe('changeName', () => {
  it(`changes the value of firstName to 'Danger'`, () => {
    changeName();
    assert.strictEqual(firstName, 'Danger');
  });
});

describe('hangUp', () => {
  it(`changes the value of callStatus to be 'call ended'`, () => {
    hangUp();
    assert.strictEqual(callStatus, 'call ended');
  });
});
