// Get node at a particular index

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head
    this.length = 1;
  }


  push(value) {
    // initialize the new Node
    const newNode = new Node(value);
    // if the list is empty add add the first node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;

    } else {
      // if the list is not empty add the new node
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = null;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
}

let myLinkedList = new LinkedList(0);

myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)

console.log(myLinkedList)
console.log(myLinkedList.get(2))