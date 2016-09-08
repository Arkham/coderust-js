// Given a double 'x' and an integer 'n'. Write a function to calculate 'x'
// raised to the power 'n'.

let powerPower = function(x, n) {
  if (n === 1) {
    return x;
  }

  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    return powerPower((1/x), n * -1);
  } else {
    let temp = powerPower(x, Math.floor(n/2));

    if (n % 2 === 0) {
      return temp * temp;
    } else {
      return x * temp * temp;
    }
  }
};

const { assert } = require('../helpers');

assert(powerPower(2, 5), 32);
assert(powerPower(3, 4), 81);
assert(powerPower(1.5, 3), 3.375);
assert(powerPower(2, -2), 0.25);
assert(powerPower(7, 17), Math.pow(7, 17));
