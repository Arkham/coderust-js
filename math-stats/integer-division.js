// Divide two integers without using '/' (division) or '*' (multiplication)
// operators and return the quotient.

// slow version:
// let integerDivision = function(x, y) {
//   let current = y, result = 0;

//   while (current < x) {
//     current += y;
//     result += 1;
//   }

//   return result;
// };

let integerDivision = function(x, y) {
  if (x < y) {
    return 0;
  }

  let quotient = y, result = 1;

  while (x > quotient ) {
    quotient <<= 1;
    result <<= 1;
  }

  if (x < quotient) {
    quotient >>= 1;
    result >>= 1;
    return result + integerDivision(x - quotient, y);
  }

  return result;
};

const { assert } = require('../helpers');

assert(integerDivision(7, 2), 3);
assert(integerDivision(7, 7), 1);
assert(integerDivision(5, 4), 1);
assert(integerDivision(1, 3), 0);
assert(integerDivision(67893456, 7), 9699065);

// slow version, real 0m0.223s
// fast version, real 0m0.099s
