// Given a null terminated string, remove any white spaces (tabs or spaces).

let removeWhitespaces = function(string) {
  // easy version:
  // return string.replace(/\s/g, '');

  // fun version:
  // use a write pointer
  let characters = string.split(''), write_pointer = 0;

  characters.forEach((character, index) => {
    if (character != ' ' && character != '\t') {
      characters[write_pointer++] = character;
    }
  });

  return characters.slice(0, write_pointer).join('');
};

const { assert } = require('../helpers');

assert(removeWhitespaces('	All greek to	me.	'), 'Allgreektome.');
