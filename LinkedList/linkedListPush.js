// O(1)

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

  push(value){
    const newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = null;
    }
    this.length++;
    return this;
  }
}

let myLinkedList = new LinkedList(7);
myLinkedList.push(4);

console.log(myLinkedList)