// Implement a method to print all permutations of a given string.

let permuteArray = function(array){
  if (array.length <= 1) {
    return array;
  }

  let results = [];

  for (let i=0; i<array.length; i++) {
    let copy = array.slice(0);
    copy.splice(i, 1);
    permuteArray(copy).forEach(function(value) {
      results.push([array[i], ...value]);
    });
  }

  return results;
}

let permuteString = function(string) {
  if (!string.length) {
    return [];
  }

  let array = string.split('');

  return permuteArray(array).map(function(array) {
    return array.join('');
  });
};

const { assert } = require('../helpers');

let result = permuteString('abc');

assert(result[0], 'abc');
assert(result[1], 'acb');
assert(result[2], 'bac');
assert(result[3], 'bca');
assert(result[4], 'cab');
assert(result[5], 'cba');
