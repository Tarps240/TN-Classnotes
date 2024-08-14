const { fizzy } = require('./main.js');
const assert = require('assert');

describe('fizzy', () => {
  it(`returns 'Fizz' if the given number is divisible by 3 and not 5.`, () => {
    assert.strictEqual(fizzy(3), 'Fizz');
    assert.strictEqual(fizzy(6), 'Fizz');
    assert.strictEqual(fizzy(303), 'Fizz');
  });

  it(`returns 'Buzz' if the given number is divisible by 5 and not 3.`, () => {
    assert.strictEqual(fizzy(5), 'Buzz');
    assert.strictEqual(fizzy(20), 'Buzz');
    assert.strictEqual(fizzy(130), 'Buzz');
  });

  it(`returns 'FizzBuzz' if the given number is divisible by both 3 and 5`, () => {
    assert.strictEqual(fizzy(15), 'FizzBuzz');
    assert.strictEqual(fizzy(30), 'FizzBuzz');
    assert.strictEqual(fizzy(150), 'FizzBuzz');
  });

  it(`returns the number if the given number is divisible by neither 3 nor 5`, () => {
    assert.strictEqual(fizzy(1), 1);
    assert.strictEqual(fizzy(31), 31);
    assert.strictEqual(fizzy(100004), 100004);
  });
});

