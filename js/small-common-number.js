// Given three integer arrays sorted in ascending order, find the smallest
// number that is common in all three arrays. 

function smallestCommonNumber(arrays) {
  // initialize pointers to first cell of all arrays and limits
  let pointers = arrays.map(_ => 0);
  let limits = arrays.map(array => array.length);

  // some utility functions
  let outOfBounds = function() {
    return pointers.some((value, index) => value >= limits[index]);
  };

  let getPointedValues = function() {
    return pointers.map((i, index) => arrays[index][i]);
  };

  let allNumbersEqual = function(numbers) {
    return numbers.every(n => n == numbers[0]);
  };

  // main loop
  while (!allNumbersEqual(getPointedValues())) {
    if (outOfBounds()) { return -1; }

    let [_, minIndex] = arrays.reduce(([min, minIndex], array, index) => {
      let current = array[pointers[index]];
      if (min == null || current < min) {
        return [current, index];
      } else {
        return [min, minIndex];
      }
    }, [null, null]);

    pointers[minIndex]++;
    console.log(pointers);
    console.log(getPointedValues());
  }

  return getPointedValues()[0];
}

let { assert } = require('./helpers');

assert(smallestCommonNumber([
  [6,7,10,25,30,63,64],
  [-1,4,5,6,7,8,50],
  [1,6,10,14]]),
6);

assert(smallestCommonNumber([
  [7,10,25,30,63,64],
  [-1,4,5,6,7,8,50],
  [1,6,10,14]]),
-1);
