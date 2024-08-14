const {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  personsHeight,
} = require('./main.js');

const assert = require('assert');

describe('isItLong', () => {
  it('returns undefined if given a string under 20 characters', () => {
    assert.strictEqual(isItLong('hi'), undefined);
  });

  it('returns undefined if given a string of exactly 20 characters', () => {
    assert.strictEqual(isItLong(`I'm 20 chars long...`), undefined);
  });

  it(`returns "That's a long string!" if the string is longer than 20 characters`, () => {
    assert.strictEqual(isItLong(`Boy HOWDY am I a long string, huh. Go me!`), `That's a long string!`);
  });
});

describe('isItMedium', () => {
  it('returns undefined if given a string under 10 characters', () => {
    assert.strictEqual(isItMedium('hi'), undefined);
  });

  it('returns undefined if given a string over 20 characters', () => {
    assert.strictEqual(isItMedium(`I'm 21 chars long!!!!`), undefined);
  });

  it(`returns "That's a regular sized string!" if the string is exactly 10 characters`, () => {
    assert.strictEqual(isItMedium(`I'm Medium`), `That's a regular sized string!`);
  });

  it(`returns "That's a regular sized string!" if the string is between 10 and 20 characters`, () => {
    assert.strictEqual(isItMedium(`I'm in the middle!`), `That's a regular sized string!`);
    assert.strictEqual(isItMedium(`And so am I!`), `That's a regular sized string!`);
  });

  it(`returns "That's a regular sized string!" if given a string of exactly 20 characters`, () => {
    assert.strictEqual(isItMedium(`I'm 20 chars long...`), `That's a regular sized string!`);
  });
});

describe('isItShort', () => {
  it(`returns "That's a small string!" if given a string of fewer than 10 characters`, () => {
    assert.strictEqual(isItShort(`I'm Short`), `That's a small string!`);
  });

  it(`returns "That's not a small string!" if given a string over 10 characters long.`, () => {
    assert.strictEqual(isItShort(`I'm 20 chars long...`), `That's not a small string!`);
  });

  it(`returns "That's not a small string!" if given a string of exactly 10 characters`, () => {
    assert.strictEqual(isItShort(`I'm Medium`), `That's not a small string!`);
  });
});

describe('howLongIsMyString', () => {
  it(`should return "That's a long string!" given a string of more than 20 characters.`, () => {
    assert.strictEqual(howLongIsMyString(`I'm 21 chars long!!!!`), `That's a long string!`);
  });

  it(`should return "That's a regular sized string!" given a string of exactly 20 characters.`, () => {
    assert.strictEqual(howLongIsMyString(`I'm 20 chars long...`), `That's a regular sized string!`);
  });

  it(`should return "That's a regular sized string!" given a string of between 10 and 20 characters.`, () => {
    assert.strictEqual(howLongIsMyString(`Not long or short!`), `That's a regular sized string!`);
    assert.strictEqual(howLongIsMyString(`About yea long...`), `That's a regular sized string!`);
  });

  it(`should return "That's a regular sized string!" given a string of exactly 10 characters.`, () => {
    assert.strictEqual(howLongIsMyString(`I'm Medium`), `That's a regular sized string!`);
  });

  it(`should return "That's a small string!" if given a string of fewer than 10 characters`, () => {
    assert.strictEqual(howLongIsMyString(`Shorty!!!`), `That's a small string!`);
  });
});

describe('personsHeight', () => {
  it(`should return 85 if given the string 'Shaq'`, () => {
    assert.strictEqual(personsHeight('Shaq'), 85);
  });

  it(`should return 65 if given the string 'Zooey'`, () => {
    assert.strictEqual(personsHeight('Zooey'), 65);
  });

  it(`should return "I don't know everyone's height!" given any other argument.`, () => {
    assert.strictEqual(personsHeight('Anthony'), `I don't know everyone's height!`);
  });
});
