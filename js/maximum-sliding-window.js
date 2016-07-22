// Given a large array of integers and a window of size 'w', find the current
// maximum in the window as the window slides through the entire array.

// some sane helpers
Array.prototype.last = function() {
  return this[this.length - 1];
}

let maximumSlidingWindow = function(array, windowSize) {
  if (array.length < windowSize) {
    return [];
  }

  let results = [];
  let stash = [];

  // some utility functions
  let getStashMaximum = function() {
    return array[stash[0]];
  };

  let logWindow = function(start, end) {
    console.log('\nCurrent window\t', array.slice(start, end + 1));
  };

  let logStash = function() {
    console.log('Stash indexes\t', stash);
    console.log('Stash values\t', stash.map(function(i) {
      return array[i];
    }));
  };

  // build first stash by scanning all elements in first window
  // - if current element is greater than last one in stash, remove the last one
  // - repeat previous step as long as possible
  // - push current element to end of stash
  logWindow(0, windowSize - 1);

  let insertCurrentInStash = function(index) {
    while (stash.length > 0 && array[index] > array[stash.last()]) {
      stash.pop();
    }

    stash.push(index);
  };

  for (let index = 0; index < windowSize; index++) {
    insertCurrentInStash(index);
  }

  // first element in window always contains current maximum
  logStash();
  results.push(getStashMaximum());

  // go on from there
  for (let index = windowSize; index < array.length; index++) {
    let start = index - windowSize + 1;
    let end = index;
    logWindow(start, end);

    // remove top of stash if window moved over
    if (stash[0] == index - windowSize) {
      stash.shift();
    }
    // keep inserting using same logic
    insertCurrentInStash(index);

    logStash();
    results.push(getStashMaximum());
  }

  return results;
};

let { assert } = require('./helpers');

let testData = [-4, 2, -5, 3, 6, -1, -2, -66, -4, -55, 9];

assert(maximumSlidingWindow(testData, 3).toString(), '2,3,6,6,6,-1,-2,-4,9');
