const assert = require('assert');
const {
  xify,
  yellingChars,
  indexedChars,
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
} = require('./main.js');

describe('xify', () => {
  it(`returns a string the same length as the given string, but with each character replaced by the character 'x'`, () => {
    const str1 = 'hello';
    const indexed1 = 'xxxxx';
    const str2 = 'hi there';
    const indexed2 = 'xxxxxxxx';
    const str3 = 'a house divided cannot stand';
    const indexed3 = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';

    assert.strictEqual(xify(str1), indexed1);
    assert.strictEqual(xify(str2), indexed2);
    assert.strictEqual(xify(str3), indexed3);
  });
});

describe('yellingChars', () => {
  it(`adds an exclamation point after each character in the given str`, () => {
    const str1 = 'goodness';
    const indexed1 = 'g!o!o!d!n!e!s!s!';
    const str2 = 'oh hello';
    const indexed2 = 'o!h! !h!e!l!l!o!';
    const str3 = 'well bye';
    const indexed3 = 'w!e!l!l! !b!y!e!';

    assert.strictEqual(yellingChars(str1), indexed1);
    assert.strictEqual(yellingChars(str2), indexed2);
    assert.strictEqual(yellingChars(str3), indexed3);
  });
});

describe('indexedChars', () => {
  it(`adds a 0 before a one-character string`, () => {
    const char1 = 'a';
    const char2 = 'z';
    const indexed1 = '0a';
    const indexed2 = '0z';

    assert.strictEqual(indexedChars(char1), indexed1);
    assert.strictEqual(indexedChars(char2), indexed2);
  });

  it(`adds the index of each character before that character in the given string`, () => {
    const str1 = 'hello';
    const indexed1 = '0h1e2l3l4o';
    const str2 = 'bye';
    const indexed2 = '0b1y2e';

    assert.strictEqual(indexedChars(str1), indexed1);
    assert.strictEqual(indexedChars(str2), indexed2);
  });
});

describe('exclaim', () => {
  it(`returns a sentence with every question mark changed to an exclamation point`, () => {
    assert.strictEqual(exclaim('I am the best?'), 'I am the best!');
    assert.strictEqual(
      exclaim('What are you doing? Are you a fool?'),
      'What are you doing! Are you a fool!'
    );
  });

  it(`returns a sentence with every period changed to an exclamation point`, () => {
    assert.strictEqual(exclaim('I am.'), 'I am!');
    assert.strictEqual(exclaim('This is fine.'), 'This is fine!');
  });
});

describe('repeatIt', () => {
  it(`returns the given string repeated the number of times as the second parameter`, () => {
    assert.strictEqual(repeatIt('beetlejuice', 3), 'beetlejuicebeetlejuicebeetlejuice');
    assert.strictEqual(repeatIt('oh hi!', 8), 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!');
  });
});

describe('truncate', () => {
  it(`shortens a long string to 15 characters plus an ellipsis (...)`, () => {
    const longString1 = 'The fault, dear Brutus, is not in our stars, but in ourselves.';
    const truncated1 = 'The fault, dear...';
    const longString2 = "Well, that's just, like, your opinion man.";
    const truncated2 = "Well, that's ju...";

    assert.strictEqual(truncate(longString1), truncated1);
    assert.strictEqual(truncate(longString2), truncated2);
  });

  it(`does not truncate a string shorter than 18 characters`, () => {
    const shortString1 = "I'm 17 characters";
    const shortString2 = "Whoa.";
    assert.strictEqual(truncate(shortString1), shortString1);
    assert.strictEqual(truncate(shortString2), shortString2);
  });
});

describe('ciEmailify', () => {
  it(`creates an email from a two-part name`, () => {
    assert.strictEqual(ciEmailify('kyle rose'), 'kyle.rose@perseverenow.org');
    assert.strictEqual(ciEmailify('jason doty'), 'jason.doty@perseverenow.org');
  });

  it(`handles uppercased names`, () => {
    assert.strictEqual(ciEmailify('kyle Rose'), 'kyle.rose@perseverenow.org');
    assert.strictEqual(ciEmailify('jason Doty'), 'jason.doty@perseverenow.org');
  });
});

describe('reverse', () => {
  it(`reverses the given string`, () => {
    assert.strictEqual(reverse('kyle'), 'elyk');
    assert.strictEqual(reverse('jason'), 'nosaj');
  });
});

describe('onlyVowels', () => {
  it(`returns only the vowels from a word`, () => {
    assert.strictEqual(onlyVowels('Kyle Rose'), 'eoe');
    assert.strictEqual(onlyVowels('Jason Doty'), 'aoo');
  });

  it(`does not count "y" as a vowel`, () => {
    assert.strictEqual(onlyVowels('quickly'), 'ui');
    assert.strictEqual(onlyVowels('cowardly'), 'oa');
  });

  it(`handles uppercased vowels`, () => {
    assert.strictEqual(onlyVowels('August Dremel'), 'Auuee');
    assert.strictEqual(onlyVowels('New Orleans'), 'eOea');
  });
});

describe('numberedChars', () => {
  it(`adds a 1 in parentheses before a one-character string`, () => {
    const char1 = 'a';
    const char2 = 'z';
    const numbered1 = '(1)a';
    const numbered2 = '(1)z';

    assert.strictEqual(numberedChars(char1), numbered1);
    assert.strictEqual(numberedChars(char2), numbered2);
  });

  it(`adds the number of each character before that character in the given string`, () => {
    const str1 = 'hello';
    const numbered1 = '(1)h(2)e(3)l(4)l(5)o';
    const str2 = 'bye';
    const numbered2 = '(1)b(2)y(3)e';

    assert.strictEqual(numberedChars(str1), numbered1);
    assert.strictEqual(numberedChars(str2), numbered2);
  });
});

describe('crazyCase', () => {
  it(`returns a string with every other letter uppercased`, () => {
    assert.strictEqual(crazyCase('hello'), 'hElLo');
    assert.strictEqual(crazyCase('you'), 'yOu');
  });

  it(`counts spaces as characters`, () => {
    assert.strictEqual(crazyCase('multiple words here'), 'mUlTiPlE WoRdS HeRe');
    assert.strictEqual(crazyCase('crazy stuff'), 'cRaZy sTuFf');
  });

  it(`correctly lowercases parts of an uppercased string`, () => {
    assert.strictEqual(crazyCase('YELLING'), 'yElLiNg');
    assert.strictEqual(crazyCase('PERPETUALLY'), 'pErPeTuAlLy');
  });
});

describe('titleCase', () => {
  it(`returns a transformed version of the given string where every word starts with a capital letter`, () => {
    assert.strictEqual(titleCase('The matrix'), 'The Matrix');
    assert.strictEqual(titleCase('The matrix reloaded'), 'The Matrix Reloaded');
  });

  it(`handles the first word of a title`, () => {
    assert.strictEqual(titleCase('speed'), 'Speed');
    assert.strictEqual(titleCase('return of the king'), 'Return Of The King');
  });

  it(`lowercases any letter that is not the first letter of a word`, () => {
    assert.strictEqual(titleCase('sPeEd'), 'Speed');
    assert.strictEqual(titleCase('persevEre coDe'), 'Persevere Code');
  });
});

describe('camelCase', () => {
  it(`removes spaces from the given string`, () => {
    assert.strictEqual(camelCase('oh Hello'), 'ohHello');
    assert.strictEqual(camelCase('whats Up Dog'), 'whatsUpDog');
  });

  it(`upper cases the first letters of non-first words`, () => {
    assert.strictEqual(camelCase('well yeah of course'), 'wellYeahOfCourse');
    assert.strictEqual(camelCase('boy howdy'), 'boyHowdy');
  });

  it(`lower cases the first letter of the first word`, () => {
    assert.strictEqual(camelCase('Well yeah of course'), 'wellYeahOfCourse');
    assert.strictEqual(camelCase('Boy howdy'), 'boyHowdy');
  });
});

describe('crazyCase2ReturnOfCrazyCase', () => {
  it(`returns a string with every other letter uppercased`, () => {
    assert.strictEqual(crazyCase2ReturnOfCrazyCase('hello'), 'hElLo');
    assert.strictEqual(crazyCase2ReturnOfCrazyCase('you'), 'yOu');
  });

  it(`does NOT count spaces as characters`, () => {
    assert.strictEqual(crazyCase2ReturnOfCrazyCase('multiple words here'), 'mUlTiPlE wOrDs HeRe');
    assert.strictEqual(crazyCase2ReturnOfCrazyCase('crazy stuff'), 'cRaZy StUfF');
  });

  it(`correctly lowercases parts of an uppercased string`, () => {
    assert.strictEqual(crazyCase2ReturnOfCrazyCase('YELLING'), 'yElLiNg');
    assert.strictEqual(crazyCase2ReturnOfCrazyCase('PERPETUALLY'), 'pErPeTuAlLy');
  });
});
