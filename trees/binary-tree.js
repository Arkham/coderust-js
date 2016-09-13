class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  visit(visitFun, depth = 0) {
    if (this.left) { this.left.visit(visitFun, depth+1); }
    visitFun(this, depth);
    if (this.right) { this.right.visit(visitFun, depth+1); }
  }
}

class BinaryTree {
  constructor(data) {
    this.root = new Node();
    this.buildTree(this.root, ...data);
  }

  buildBranch(values) {
    let result = new Node();

    if (Array.isArray(values)) {
      this.buildTree(result, ...values);
    } else {
      this.buildTree(result, values, null, null);
    }

    return result;
  }

  buildTree(node, value, left, right) {
    node.value = value;

    if (left) {
      node.left = this.buildBranch(left);
    }

    if (right) {
      node.right = this.buildBranch(right);
    }
  }

  visit(visitFun) {
    this.root.visit(visitFun);
  }
}

// let tree = new BinaryTree([
//   100,
//   [50, 25, null],
//   [200, 125, 350]
// ]);

// tree.visit(function(node, depth) {
//   console.log(Array(depth+1).join('  '), node.value);
// });

module.exports.BinaryTree = BinaryTree;
module.exports.Node = Node;
