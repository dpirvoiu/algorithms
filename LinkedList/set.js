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

  set(index, value) {
    if (index < 0 || index > this.length) return undefined;


    // you can also use the "get" method here
    let temp = this.head;
    for (let i = 0; i < this.length; i++) {
      temp = temp.next;
    }

    if (temp) {
      temp.value = value;
      return true // we will need the code to stop running.
    }
    return false;
  }
}
