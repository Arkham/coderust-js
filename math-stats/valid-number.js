// Given an input string, determine if it makes a valid number or not.

let isNumberValid = function(string) {
  return !!string.match(/^\d+\.?(\d*)?$/);
};

const { assert } = require('../helpers');

assert(isNumberValid('4.325'), true);
assert(isNumberValid('1.1.1'), false);
assert(isNumberValid('222'), true);
assert(isNumberValid('22.'), true);
assert(isNumberValid('22.22.'), false);
assert(isNumberValid('hello'), false);
assert(isNumberValid('22d'), false);
