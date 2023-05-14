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

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  shift() {
    if (!this.head) return undefined
    let tempHead = this.head;
    this.head = this.head.next;
    tempHead.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null
    }
    return tempHead
  }

  get(index) {
    if (index < 0 || index > this.length) return undefined

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }

  set(index, value){
    let temp = this.get(index)
    if(temp){
      temp.value = value;
      return true
    }
    return false;
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head;
    } else {
      this.tail.next = newNode
      this.tail = newNode;
    }
    this.length++
    return this
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.makeEmpty();
myLinkedList.push(1);
myLinkedList.push(2);


myLinkedList.getHead();
myLinkedList.getTail();
myLinkedList.getLength();
console.log("\nLinked List:");
myLinkedList.printList();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 1
    Tail: 2
    Length: 2

    Linked List:
    1
    2

*/