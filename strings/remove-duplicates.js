// Remove duplicate characters from a string.

let removeDuplicates = function(string) {
  let map = new Map();

  for (let i=0; i<string.length; i++) {
    let character = string[i];
    if (!map.has(character)) {
      map.set(character, true);
    }
  }

  return Array.from(map.keys()).join('');
};

const { assert } = require('../helpers');

assert(removeDuplicates('abbabcddbabcdeedebc'), 'abcde');
