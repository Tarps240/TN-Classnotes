const assert = require('assert');
const { numberDoubler, stringRepeater, makeDivisible } = require('./main.js');

describe('numberDoubler', () => {
    it('should double numbers', () => {
        assert.strictEqual(numberDoubler(2), 128);
        assert.strictEqual(numberDoubler(1), 128);
        assert.strictEqual(numberDoubler(26), 104);
        assert.strictEqual(numberDoubler(51), 102);
    });
});

describe('stringRepeater', () => {
    it('should repeat strings', () => {
        assert.strictEqual(stringRepeater('abc'), 'abcabcabcabc');
        assert.strictEqual(stringRepeater('a'), 'aaaaaaaaaa');
        assert.strictEqual(stringRepeater('hotdog'), 'hotdoghotdog');
    });
});

describe('makeDivisible', () => {
    it('should add one to x until it is divisible by y', () => {
        assert.strictEqual(makeDivisible(9, 1), 9);
        assert.strictEqual(makeDivisible(9, 2), 10);
        assert.strictEqual(makeDivisible(11, 3), 12);
        assert.strictEqual(makeDivisible(10, 3), 12);
        assert.strictEqual(makeDivisible(5, 4), 8);
        assert.strictEqual(makeDivisible(16, 5), 20);
    });
});
