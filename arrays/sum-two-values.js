// Given an array of integers and a value, determine if there are any two
// integers in the array which sum equal to the given value.

const EMPTY = 'empty';

function sumTwoValues(array, desiredSum) {
  let visited = new Map();

  array.forEach((value) => {
    let remaining = desiredSum - value;

    if (visited.has(remaining)) {
      visited.set(remaining, value);
    } else {
      visited.set(value, EMPTY);
    }
  });

  debugger

  return Array.from(visited).map(([key, value]) => {
    return [key, value];
  }).filter(([_key, value]) => {
    return value !== EMPTY;
  });
}

const { assert } = require('../helpers');

assert(sumTwoValues([5, 7, 1, 2, 8, 4, 3], 10).toString(), '7,3,2,8');
assert(sumTwoValues([5, 7, 1, 2, 8, 4, 3], 19).toString(), '');
