// Given a double number, write a function to calculate its square root.

const EPSILON = 0.001;

let _squareRoot = function(x, start, end) {
  let pivot = (start + end) / 2;
  let pivotSquared = pivot * pivot;
  let difference = x - pivotSquared;

  if (Math.abs(difference) <= EPSILON) {
    return pivot;
  } else if (difference > 0) {

    return _squareRoot(x, pivot, end);
  } else {
    return _squareRoot(x, start, pivot);
  }
};

let squareRoot = function(x) {
  if (x < 1) {
    return _squareRoot(x, 0, 1);
  } else {
    return _squareRoot(x, 0, x);
  }
}

const { assert } = require('../helpers');

assert(squareRoot(16).toFixed(0).toString(), '4');
assert(squareRoot(17).toFixed(3).toString(), '4.123');
assert(squareRoot(2.25).toFixed(1).toString(), '1.5');
assert(squareRoot(0.25).toFixed(1).toString(), '0.5');
