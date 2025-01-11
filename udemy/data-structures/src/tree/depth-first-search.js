class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    const found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  DFSPreOrder() {
    let data = [];
    let current = this.root;
    const traverse = (node) => {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data
  }

  DFSPostOrder() {
    let data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value)
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    const data = [];
    const traverse = (node) => {
      node.left && traverse(node.left);
      data.push(node.value)
      node.right && traverse(node.right); 
    }
    traverse(this.root);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(9);
tree.insert(11);
tree.insert(8);
tree.insert(12);
tree.insert(13);
tree.insert(7);

console.log(tree.DFSInOrder())

