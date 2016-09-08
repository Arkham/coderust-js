// Given a sentence, reverse the order of words.

let reverseWords = function(string) {
  return string.split(' ').reverse().join(' ');
};

const { assert } = require('../helpers');

assert(reverseWords('The quick brown fox jumped over the lazy dog.'),
  'dog. lazy the over jumped fox brown quick The');
