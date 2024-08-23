/******************
 * YOUR CODE HERE *
 ******************/
const addAll = function(arr){
  let sum = 0
  for(let num of arr){
    sum += num
  }
  return sum
}
const countSpaces = function (str){
  let count = 0
  for(let char of str){
    if(char === ' '){
      count++
    }
  }
  return count
}

const countTrues = function(booleans){
  let count = 0
  for(let bool of booleans){
    if(bool === true){
      count++
    }
  }
  return count
}

const makeFriendly = function(paragraph){
  let result = ''
  for (let char of paragraph){
    if(char === '.'){
      result += '!'
    }else{
      result += char
    }
  }
  return result
}

const cubeAll = function(arr){
  let result = []
  for (let num of arr){
    result.push(num ** 3)
  }
  return result
}

const addNoises = function(arr){
  let result = []
  for(animal of arr){
    if (animal === 'Fido' || animal === 'Rolph' || animal === 'Maisie') {
      result.push(animal + ' says "Woof!"')
    } else if (animal === 'Garfield' || animal === 'Heathcliff') {
      result.push(animal + ' says "Meow!"')
    } else if (animal === 'Barnie' || animal === 'Sharp Tooth') {
      result.push(animal + ' says "ROWR."')
    }
  }
  return result
}

const womenOnly = function(arr){
  const women = [];
  for(let name of arr){
    if(name.endsWith('F')){
      women.push(name)
    }
  }
  return women;
}

const integersOnly = function(numbers){
  const integers = []
  for(let num of numbers){
    if(num % 1 === 0){
      integers.push(num)
    }
  }
  return integers
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/



if (typeof addAll === 'undefined') {
  addAll = undefined;
}

if (typeof countSpaces === 'undefined') {
  countSpaces = undefined;
}

if (typeof countTrues === 'undefined') {
  countTrues = undefined;
}

if (typeof makeFriendly === 'undefined') {
  makeFriendly = undefined;
}

if (typeof cubeAll === 'undefined') {
  cubeAll = undefined;
}

if (typeof addNoises === 'undefined') {
  addNoises = undefined;
}

if (typeof womenOnly === 'undefined') {
  womenOnly = undefined;
}

if (typeof integersOnly === 'undefined') {
  integersOnly = undefined;
}

const assert = require('assert');
const {
  addAll,
  countSpaces,
  countTrues,
  makeFriendly,
  cubeAll,
  addNoises,
} = require('./your-functions'); // Import your functions

describe('addAll', () => {
  it(`adds all the numbers in the array`, () => {
    const nums1 = [5, 3, 7, -11, 1003];
    const nums2 = [8, 1, 2, -53, -812];

    assert.strictEqual(addAll(nums1), 1007);
    assert.strictEqual(addAll(nums2), -854);
  });

  it(`isn't reassignable`, () => {
    assert.throws(() => {
      addAll = 500;
    });
  });
});

describe('countSpaces', () => {
  it(`counts all the spaces in a multi-space string`, () => {
    const sentence1 = 'well hello there my crumpet';
    const sentence2 = 'strings 4 eva';

    assert.strictEqual(countSpaces(sentence1), 4);
    assert.strictEqual(countSpaces(sentence2), 2);
  });

  it(`correctly identifies strings with no spaces`, () => {
    const sentence1 = 'supercalifragilisticexpialidocious';
    const sentence2 = 'antidisestablishmentarianism';
    const sentence3 = 'pneunultramicroscopicsilicovulcanoconiosis';

    assert.strictEqual(countSpaces(sentence1), 0);
    assert.strictEqual(countSpaces(sentence2), 0);
    assert.strictEqual(countSpaces(sentence3), 0);
  });

  it(`doesn't count all non-letters as spaces`, () => {
    const sentence1 = 'how now, brown cow';
    const sentence2 = '@(*@ are you even talking about?';

    assert.strictEqual(countSpaces(sentence1), 3);
    assert.strictEqual(countSpaces(sentence2), 5);
  });

  it(`isn't reassignable`, () => {
    assert.throws(() => {
      countSpaces = 500;
    });
  });
});

describe('countTrues', () => {
  it(`counts all the trues in a true-only array`, () => {
    const bools1 = [true, true, true];
    const bools2 = [true, true, true, true, true];

    assert.strictEqual(countTrues(bools1), 3);
    assert.strictEqual(countTrues(bools2), 5);
  });

  it(`counts all the trues in an array of assorted booleans`, () => {
    const bools1 = [true, false, true, false];
    const bools2 = [true, false, false, true, true, false, false, true];

    assert.strictEqual(countTrues(bools1), 2);
    assert.strictEqual(countTrues(bools2), 4);
  });

  it(`doesn't confuse truthy values with true values`, () => {
    const values1 = [true, 'hello', 3, true, []];

    assert.strictEqual(countTrues(values1), 2);
  });

  it(`doesn't confuse the string 'true' with the boolean true`, () => {
    const values1 = [true, 'true', 'true', true, 'true'];
    const values2 = [true, 'true', 'true', true, true, 'true', 'true', true];

    assert.strictEqual(countTrues(values1), 2);
    assert.strictEqual(countTrues(values2), 4);
  });

  it(`isn't reassignable`, () => {
    assert.throws(() => {
      countTrues = 500;
    });
  });
});

describe('makeFriendly', () => {
  it(`given a paragraph, returns a paragraph where each sentence ends with an exclamation point instead of the period it held before.`, () => {
    const paragraph1 = `Do you see the story. Do you see anything. It seems to me I am trying to tell you a dream.`;
    const paragraph2 = `Like a running blaze on a plain, like a flash of lightning in the clouds. We live in the flicker.`;
    const paragraph3 = `What is that feeling when you’re driving away from people and they recede on the plain till you see their specks dispersing. It’s the too-huge world vaulting us, and it’s good-bye. But we lean forward to the next crazy venture beneath the skies. Nothing behind me, everything ahead of me, as is ever so on the road.`;

    const friendly1 = `Do you see the story! Do you see anything! It seems to me I am trying to tell you a dream!`;
    const friendly2 = `Like a running blaze on a plain, like a flash of lightning in the clouds! We live in the flicker!`;
    const friendly3 = `What is that feeling when you’re driving away from people and they recede on the plain till you see their specks dispersing! It’s the too-huge world vaulting us, and it’s good-bye! But we lean forward to the next crazy venture beneath the skies! Nothing behind me, everything ahead of me, as is ever so on the road!`;

    assert.strictEqual(makeFriendly(paragraph1), friendly1);
    assert.strictEqual(makeFriendly(paragraph2), friendly2);
    assert.strictEqual(makeFriendly(paragraph3), friendly3);
  });

  it(`isn't reassignable`, () => {
    assert.throws(() => {
      makeFriendly = 500;
    });
  });
});

describe('cubeAll', () => {
  it(`given an array of numbers, returns an array where each number has been cubed`, () => {
    const nums1 = [3, 2, 5];
    const cubes1 = [27, 8, 125];
    const nums2 = [1, 10, -2];
    const cubes2 = [1, 1000, -8];

    assert.deepStrictEqual(cubeAll(nums1), cubes1);
    assert.deepStrictEqual(cubeAll(nums2), cubes2);
  });

  it(`doesn't modify the original array`, () => {
    const nums1 = [3, 2, 5];
    const nums2 = [1, 10, -2];
    const originalNums1 = [3, 2, 5];
    const originalNums2 = [1, 10, -2];

    cubeAll(nums1);
    cubeAll(nums2);

    assert.deepStrictEqual(nums1, originalNums1);
    assert.deepStrictEqual(nums2, originalNums2);
  });

  it(`isn't reassignable`, () => {
    assert.throws(() => {
      cubeAll = 500;
    });
  });
});

describe('addNoises', () => {
  it('adds the appropriate noises for each animal in the given array', () => {
    const dogs = ['Fido', 'Rolph', 'Maisie'];
    const cats = ['Garfield', 'Heathcliff'];
    const dinos = ['Barnie', 'Sharp Tooth'];

    const animals1 = ['Fido', 'Garfield', 'Sharp Tooth'];
    const withNoises1 = ['Fido says "Woof!"', 'Garfield says "Meow!"', 'Sharp Tooth says "ROWR."'];
    const animals2 = ['Rolph', 'Maisie', 'Barnie', 'Heathcliff'];
    const withNoises2 = [
      'Rolph says "Woof!"',
      'Maisie says "Woof!"',
      'Barnie says "ROWR."',
      'Heathcliff says "Meow!"',
    ];

    assert.deepStrictEqual(addNoises(animals1), withNoises1);
    assert.deepStrictEqual(addNoises(animals2), withNoises2);
  });

  it(`doesn't modify the original array`, () => {
    const animals1 = ['Fido', 'Garfield', 'Sharp Tooth'];
    const animals2 = ['Rolph', 'Maisie', 'Barnie', 'Heathcliff'];
    const originalAnimals1 = ['Fido', 'Garfield', 'Sharp Tooth'];
    const originalAnimals2 = ['Rolph', 'Maisie', 'Barnie', 'Heathcliff'];

    addNoises(animals1);
    addNoises(animals2);

    assert.deepStrictEqual(animals1, originalAnimals1);
    assert.deepStrictEqual(animals2, originalAnimals2);
  });

  it(`isn't reassignable`, () => {
    assert.throws(() => {
      addNoises = 500;
    });
  });
});

describe('womenOnly', () => {
  it('should return an empty array if the input is an empty array', () => {
    const input = [];
    const result = womenOnly(input);
    assert.deepStrictEqual(result, []);
  });

  it('should return an empty array if there are no female names', () => {
    const input = ['John', 'Robert', 'Michael'];
    const result = womenOnly(input);
    assert.deepStrictEqual(result, []);
  });

  it('should return an array with female names only', () => {
    const input = ['Alice F', 'Bob M', 'Charlie F', 'David M', 'Eve F'];
    const result = womenOnly(input);
    assert.deepStrictEqual(result, ['Alice F', 'Charlie F', 'Eve F']);
  });
});

describe('integersOnly', () => {
  it('should return an empty array if the input is an empty array', () => {
    const input = [];
    const result = integersOnly(input);
    assert.deepStrictEqual(result, []);
  });

  it('should return an empty array if there are no integers in the input', () => {
    const input = [1.5, 2.25, 3.75];
    const result = integersOnly(input);
    assert.deepStrictEqual(result, []);
  });

  it('should return an array with only integers', () => {
    const input = [1, 2, 3.0, 4.5, 5, 6.0];
    const result = integersOnly(input);
    assert.deepStrictEqual(result, [1, 2, 3.0, 5, 6.0]); // 3.0 and 6.0 are considered integers
  });

  it('should handle negative integers', () => {
    const input = [-1, -2, 3, -4.0, 5.5];
    const result = integersOnly(input);
    assert.deepStrictEqual(result, [-1, -2, 3, -4.0]); // -4.0 is considered an integer
  });

  it('should handle a mix of integers and non-integers', () => {
    const input = [2.75, 4, -3.8, 6, 9.0, 11];
    const result = integersOnly(input);
    assert.deepStrictEqual(result, [4, 6, 9.0, 11]); // 9.0 is considered an integer
  });
});


