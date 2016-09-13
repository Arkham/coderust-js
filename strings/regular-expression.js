// Given a text and a pattern, determine if the pattern matches with text
// completely or not using regular expression matching. For simplicity assume
// that the pattern may contain only two operators i.e. '.' and '*'. Operator
// '*' in pattern means that the character preceding '*' may not appear or may
// appear any number of times in text. Operator '.' matches with any character
// in text exactly once.

let matchRegExp = function(text, regExp) {
  let textIndex = 0, regExpIndex = 0;

  let isMatch = function(textIndex, regExpIndex) {
    return regExp[regExpIndex] === '.' ||
      regExp[regExpIndex] === text[textIndex];
  };

  while(textIndex < text.length && regExpIndex < regExp.length) {
    if (regExp[regExpIndex+1] === '*') {
      console.log('text:', text[textIndex], 'pattern:', `${regExp[regExpIndex]}*`);
    } else {
      console.log('text:', text[textIndex], 'pattern:', regExp[regExpIndex]);
    }

    if (regExp[regExpIndex+1] === '*') {
      if (isMatch(textIndex, regExpIndex)) {
        textIndex++;
      } else {
        regExpIndex += 2;
      }
    } else if (isMatch(textIndex, regExpIndex)) {
      textIndex++;
      regExpIndex++;
    } else {
      break;
    }
  };

  if (regExp[regExpIndex+1] === '*') {
    regExpIndex += 2;
  }

  return (textIndex === text.length && regExpIndex === regExp.length);
};

const { assert } = require('../helpers');

assert(matchRegExp('abbb', 'ab*'), true);
assert(matchRegExp('a', 'ab*'), true);
assert(matchRegExp('abc', 'ab*'), false);
assert(matchRegExp('abcccd', 'ab*c*d'), true);
assert(matchRegExp('hello', 'bar'), false);
