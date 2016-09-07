// Given an integer array find all Pythagorean triplets.

let pythagoreanTriplets = function(collection) {
  let length = collection.length;
  let results = [];

  collection = collection.sort(function(a, b) {
    return a - b;
  });

  for (let i=1; i<length-1; i++) {
    let j = 0;
    let k = length-1;

    while (j < k) {
      if (j === i) {
        j++;
        continue;
      }

      if (i === k) {
        k--;
        continue;
      }

      let c = collection[i];
      let a = collection[j];
      let b = collection[k];

      let c2 = c * c;
      let a2 = a * a;
      let b2 = b * b;

      if (a2 + b2 === c2) {
        results.push([a,b,c]);
        break;
      } else if (a2 + b2 < c2) {
        j++;
      } else {
        k--;
      }
    }
  }

  return results;
};

const { assert } = require('../helpers');

let results = pythagoreanTriplets([4,16,1,2,3,5,6,8,25,7,10]);

assert(results[0].toString(), '3,4,5');
assert(results[1].toString(), '6,8,10');
