// Given head pointers of two linked lists where each linked list
// represents an integer number (each node is a digit), add them
// and return the resulting linked list.

const { LinkedList, Node } = require('./linked-list');

let sumIntegers = function(first, second) {
  let result = new LinkedList();
  let resultCurr;

  let firstCurr = first.head;
  let secondCurr = second.head;
  let carry = 0;

  while (firstCurr && secondCurr) {
    let sum = firstCurr.value + secondCurr.value + carry;
    let rem = sum % 10;
    let newNode = new Node(rem);

    carry = (rem === sum) ? 0 : 1;

    if (!result.head) {
      resultCurr = result.head = newNode;
    } else {
      resultCurr.next = newNode;
      resultCurr = resultCurr.next;
    }

    firstCurr = firstCurr.next;
    secondCurr = secondCurr.next;
  }

  if (firstCurr) {
    let newNode = new Node(firstCurr.value + carry);
    newNode.next = firstCurr.next;
    resultCurr.next = newNode;
  } else if (secondCurr) {
    let newNode = new Node(secondCurr.value + carry);
    newNode.next = secondCurr.next;
    resultCurr.next = newNode;
  } else if (carry) {
    resultCurr.next = new Node(carry);
  }

  return result;
};

const { assert } = require('../helpers');

assert(sumIntegers(new LinkedList([1,0,9]), new LinkedList([6,6,6])).toString(),
  '7,6,5,1');

assert(sumIntegers(new LinkedList([1,0,9,2]), new LinkedList([6,6,6])).toString(),
  '7,6,5,3');

assert(sumIntegers(new LinkedList([1,0,9,2,8,9]), new LinkedList([6,6,6])).toString(),
  '7,6,5,3,8,9');

assert(sumIntegers(new LinkedList([1,0,9]), new LinkedList([6,6,6,7])).toString(),
  '7,6,5,8');
