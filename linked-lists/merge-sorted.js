// Given two sorted linked lists, merge them such that resulting
// linked list is also sorted.

const { LinkedList } = require('./linked-list');

let mergeSorted = function(first, second) {
  if (!first.head) {
    return second;
  }

  if (!second.head) {
    return first;
  }

  let firstCurr = first.head;
  let secondCurr = second.head;
  let result = new LinkedList();

  if (firstCurr.value < secondCurr.value) {
    result.head = firstCurr;
    firstCurr = firstCurr.next;
  } else {
    result.head = secondCurr;
    secondCurr = secondCurr.next;
  }

  let resultCurr = result.head;

  while (firstCurr && secondCurr) {
    if (firstCurr.value < secondCurr.value) {
      resultCurr.next = firstCurr;
      firstCurr = firstCurr.next;
    } else {
      resultCurr.next = secondCurr;
      secondCurr = secondCurr.next;
    }

    resultCurr = resultCurr.next;
  }

  if (firstCurr) {
    resultCurr.next = firstCurr;
  } else {
    resultCurr.next = secondCurr
  }

  return result;
};

const { assert } = require('../helpers');

assert(
  mergeSorted(new LinkedList(), new LinkedList([1,3,5])).toString(),
  '1,3,5');

assert(
  mergeSorted(new LinkedList([2,4,6]), new LinkedList()).toString(),
  '2,4,6');

assert(
  mergeSorted(
    new LinkedList([2,4,6]),
    new LinkedList([1,3,5])).toString(),
  '1,2,3,4,5,6');
