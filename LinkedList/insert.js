// insert a value at a specific index

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return undefined

    let temp = this.head;
    let prev = temp;

    for (let i = 0; i < this.length; i++) {
      if (temp.next) {
        prev = temp
        temp = temp.next
      }
    }

    prev.next = value;
  }
}