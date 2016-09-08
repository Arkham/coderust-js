// Given an array of positive numbers from 1 to n, such that all numbers from 1
// to n are present except one. Find the missing number.

let findMissingNumber = function(array) {
  let length = array.length;

  if (length < 1) {
    return;
  }

  let sum = array.reduce((acc, value) => acc + value);

  // one number is missing
  let totalNum = length + 1;
  let totalSum = (1 + totalNum) * totalNum / 2;

  return totalSum - sum;
};

const { assert } = require('../helpers');

assert(findMissingNumber([5,1,2,4]), 3);
assert(findMissingNumber([3,7,1,2,8,4,5]), 6);
