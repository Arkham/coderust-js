// Given a string find all substrings that are palindromes.

let palindromesInSubstring = function(string, leftIndex, rightIndex) {
  let result = [];

  while (leftIndex >= 0 && rightIndex < string.length) {
    if (string[leftIndex] !== string[rightIndex]) {
      break;
    }

    substr = string.substring(leftIndex, rightIndex+1);
    console.log(string, leftIndex, rightIndex, substr);
    result.push(substr);

    leftIndex--;
    rightIndex++;
  }

  return result;
};

let allPalindromes = function(string) {
  let result = [];

  for (let i=0; i<string.length; i++) {
    result.push(...palindromesInSubstring(string, i, i+1));
    result.push(...palindromesInSubstring(string, i-1, i+1));
  }

  return result;
}

const { assert } = require('../helpers');

assert([...allPalindromes('aaba')].toString(), 'aa,aba');
assert([...allPalindromes('aabaa')].toString(), 'aa,aba,aabaa,aa');
