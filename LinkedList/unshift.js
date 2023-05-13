// O(1), Add node at the start

class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
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

  unshift(value){
    const newNode = new Node(value);

    // case 1 Empty List
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else{
      // case two add item at the start
      newNode.next = this.head; // set next to current head
      this.head = newNode; // move the head backwards to the newly created node;
    }
    this.length++;
    return this;

  }
}

let myLinkedList = new LinkedList(7);
myLinkedList.push(4);

console.log(myLinkedList)

myLinkedList.unshift(2);

console.log(myLinkedList)
