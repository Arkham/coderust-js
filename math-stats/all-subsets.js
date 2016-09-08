// Find all subsets of a given set of integers.

let allSubsets = function(collection) {
  let results = [];
  let length = collection.length;
  let numSubsets = Math.pow(2, length);

  for (let i=0; i<numSubsets; i++) {
    let result = [];

    // build bit mask
    let mask = i.toString(2);
    if (mask.length < length) {
      mask = Array(length - mask.length + 1).join('0') + mask;
    }

    for (let j=0; j<length; j++) {
      if (mask[j] === '1') {
        result.push(collection[j]);
      }
    }

    results.push(result);
  }

  return results;
};

const { assert } = require('../helpers');

let result = allSubsets([2,3,4]);


assert(result[0].toString(), '');
assert(result[1].toString(), '4');
assert(result[2].toString(), '3');
assert(result[3].toString(), '3,4');
assert(result[4].toString(), '2');
assert(result[5].toString(), '2,4');
assert(result[6].toString(), '2,3');
assert(result[7].toString(), '2,3,4');
