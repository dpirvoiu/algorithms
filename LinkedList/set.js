// Very similar to get but instead of displaying the value we will change the value at that index;

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
    let newNode = new Node(value);
    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.length) {
      return this.push(value);
    }

    if (index < 0 || index > this.length) {
      return false;
    }

    let temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  set(index, value) {
    if (index < 0 || index > this.length) return undefined;

    // you can also use the "get" method here
    let temp = this.head;
    for (let i = 0; i < this.length; i++) {
      temp = temp.next;
    }

    if (temp) {
      temp.value = value;
      return true; // we will need the code to stop running.
    }
    return false;
  }

  remove(index) {
    if (index === 0) {
      return this.shift(index)
    }
    if (index === this.length - 1) {
      return this.pop()
    }
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let before = this.get(index - 1);
    let temp = before.next;

    before.next = temp.next;
    temp.next = null;

    this.length--;
    return temp
  }
}
