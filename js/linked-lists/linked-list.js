class Node {
  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  constructor(values) {
    let head;

    values = values || [];

    // push values in reverse order
    values.reverse().forEach(function(value) {
      let current = new Node(value);
      if (head) { current.next = head; }
      head = current;
    });

    this.head = head;
  }

  visit(visit_fn) {
    let current = this.head;

    while (current) {
      visit_fn(current.value);
      current = current.next;
    }
  }

  toString() {
    let result = [];

    this.visit(function(value) {
      result.push(value);
    });

    return result.toString();
  }
}

module.exports.LinkedList = LinkedList;
module.exports.Node = Node;
