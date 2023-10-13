class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.head === null && this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    const oldHead = this.head;

    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      this.head.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let countHead = 0;
    let currentHead = this.head;
    if (index <= this.length / 2) {
      while (countHead !== index) {
        currentHead = currentHead.next;
        countHead++;
      }
      return currentHead;
    }

    if (index > this.length / 2) {
      let countTail = this.length - 1;
      let currentTail = this.tail;
      while (countTail !== index) {
        currentTail = currentTail.prev;
        countTail--;
      }
      return currentTail;
    }
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (!foundNode) return false;

    foundNode.val = val;
    return true;
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.pop();
list.shift();
list.unshift(0);
list.get(2);
list.set(2, 5);

console.log(list);
