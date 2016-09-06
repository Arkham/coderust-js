// Given head pointer of a linked list, sort linked list (in ascending order)
// using merge sort and return new head pointer of sorted linked list.

const { LinkedList } = require('./linked-list');

let splitInHalves = function(head) {
  // use a fast and slow pointer, so that when fast pointer
  // reaches the end of the list, the slow pointer will be at
  // the middle of the list
  let fast = head.next, slow = head;

  while (fast) {
    fast = fast.next;

    if (fast) {
      slow = slow.next;
      fast = fast.next;
    }
  }

  let other = slow.next;
  slow.next = null; // we need to break the list in half

  return [head, other];
};

let mergeSortedLists = function(first, second) {
  if (!first) {
    return second;
  }

  if (!second) {
    return first;
  }

  let newHead;

  if (first.value < second.value) {
    newHead = first;
    first = first.next;
  } else {
    newHead = second;
    second = second.next;
  }

  let current = newHead;

  while (first && second) {
    if (first.value < second.value) {
      current.next = first;
      first = first.next;
    } else {
      current.next = second;
      second = second.next;
    }

    current = current.next;
  }

  if (first) {
    current.next = first;
  } else if (second) {
    current.next = second;
  }

  return newHead;
}

let _mergeSort = function(head) {
  if (!head || !head.next) {
    return head;
  }

  let [first, second] = splitInHalves(head);

  first = _mergeSort(first);
  second = _mergeSort(second);

  return mergeSortedLists(first, second);
};

let mergeSort = function(list) {
  list.head = _mergeSort(list.head);
  return list;
};

const { assert } = require('../helpers');

assert(mergeSort(new LinkedList([3,2,1])).toString(), '1,2,3');

assert(
  mergeSort(new LinkedList([8,7,1,6,2,9,3,4,5])).toString(),
  '1,2,3,4,5,6,7,8,9');
