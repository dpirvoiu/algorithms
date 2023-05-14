// O(n), we have to iterate trought the list and set the tail to the Node before the current tail

// You Have 3 Edge cases
// 1 Empty linked list -> Cannot pop
// 2 One item inside the linked list
// 3 LL with more than one item
// We will use two variable "pre" "temp"

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

  pop() {
    if (!this.head) return undefined; // Case 1
    // Case 2  + 3

    // double iteration
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--; // if we have one node, this would become 0

    if (this.length === 0) { // Case 3
      this.head = null;
      this.tail = null;
    }
    return temp
  }
}

let myLinkedList = new LinkedList(4)
myLinkedList.push(5);
console.log(myLinkedList)

console.log(myLinkedList.pop().value)
