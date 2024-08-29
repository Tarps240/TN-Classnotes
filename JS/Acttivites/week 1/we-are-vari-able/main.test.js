const assert = require('assert');
const {
  myFirstName,
  myLastName,
  myFavoriteCeleb,
  mySentence,
  myLuckyNum,
  myAge,
  myHeight,
  myFavoriteYear,
  mySum,
  myProduct,
  myHeightAndAge,
} = require('./main.js');

describe('myFirstName', function () {
  it('is a String', function () {
    assert.strictEqual(typeof myFirstName, 'string');
  });
});

describe('myLastName', function () {
  it('is a String', function () {
    assert.strictEqual(typeof myLastName, 'string');
  });
});

describe('myFavoriteCeleb', function () {
  it('is a String', function () {
    assert.strictEqual(typeof myFavoriteCeleb, 'string');
  });
});

describe('mySentence', function () {
  it('is a String', function () {
    assert.strictEqual(typeof mySentence, 'string');
  });
});

describe('myLuckyNum', function () {
  it('is a Number', function () {
    assert.strictEqual(typeof myLuckyNum, 'number');
  });
});

describe('myAge', function () {
  it('is a Number', function () {
    assert.strictEqual(typeof myAge, 'number');
  });
});

describe('myHeight', function () {
  it('is a Number', function () {
    assert.strictEqual(typeof myHeight, 'number');
  });
});

describe('myFavoriteYear', function () {
  it('is a Number', function () {
    assert.strictEqual(typeof myFavoriteYear, 'number');
  });
});

describe('mySum', function () {
  it('is the correct sum', function () {
    const expectedSum = 2358;
    assert.strictEqual(mySum, expectedSum);
  });
});

describe('myProduct', function () {
  it('is the correct product', function () {
    const expectedProduct = 4992;
    assert.strictEqual(myProduct, expectedProduct);
  });
});

describe('myHeightAndAge', function () {
  it('is your height plus your age', function () {
    const expectedValue = myHeight + myAge;
    assert.strictEqual(myHeightAndAge, expectedValue);
  });
});
