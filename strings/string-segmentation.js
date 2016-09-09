// Given a dictionary of words and an input string tell whether the input
// string can be completely segmented into dictionary words.

let canBeTokenized = function(string, dict, solved = []) {
  if (!string.length) {
    return true;
  }

  for (let i=1; i<=string.length; i++) {
    let first = string.slice(0, i);
    let second = string.slice(i);

    console.log(`[${[...solved]}]`, first, second);

    if (dict.has(first)) {
      if (dict.has(second) || canBeTokenized(second, dict, [...solved, first])) {
        return true;
      }
    }
  }

  return false;
};

let dictionary = new Set(['hello', 'hell', 'on', 'now']);

debugger

const { assert } = require('../helpers');

assert(canBeTokenized('hell', dictionary), true);
assert(canBeTokenized('hellonow', dictionary), true);
assert(canBeTokenized('hellono', dictionary), false);
assert(canBeTokenized('hellonhellonow', dictionary), true);
