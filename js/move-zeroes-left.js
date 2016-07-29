// Given an integer array, move all elements containing '0' to the left while
// maintaining the order of other elements in the array.

function moveZeroesLeft(array) {
  let writeIndex = array.length - 1;

  for (let readIndex = array.length - 1; readIndex >= 0; readIndex--) {
    if (array[readIndex] !== 0) {
      array[writeIndex--] = array[readIndex];
    }
  }

  for (let i = writeIndex; i >= 0; i--) {
    array[i] = 0;
  }

  return array;
}

const { assert } = require('./helpers');

let data = [ 1, 10, 20, 0, 59, 63, 0, 88, 0 ];

assert(moveZeroesLeft(data).toString(), '0,0,0,1,10,20,59,63,88');
