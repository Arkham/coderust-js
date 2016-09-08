// Given a positive integer, print all possible sum combinations using positive
// integers.

let allSumCombinations = function(number, existing = []) {
  if (number < 1) {
    return [];
  }

  let results = [];

  for (let i=1; i<=number/2; i++) {
    results.push([...existing, i, number-i]);
  }

  return results.concat(allSumCombinations(number-1, [...existing, 1]));
};

const { assert } = require('../helpers');

let result = allSumCombinations(5);

assert(result[0].toString(), '1,4');
assert(result[1].toString(), '2,3');
assert(result[2].toString(), '1,1,3');
assert(result[3].toString(), '1,2,2');
assert(result[4].toString(), '1,1,1,2');
assert(result[5].toString(), '1,1,1,1,1');
