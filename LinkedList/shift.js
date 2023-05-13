// Remove the first item and then return it. This will match the behavior of an array;
// Scenario -> 1 Item in the Linked List;
// Scenario -> 2 No items in the Linked List;

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
    this.length = 1
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = null;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp
  }
}

let newLinkedList = new LinkedList(3)
console.log(newLinkedList, 'Created List');

newLinkedList.push(10);
console.log(newLinkedList, "newLinkedList PUSHED");


console.log(newLinkedList.shift(), "Shifted 2 item list")
console.log(newLinkedList.shift(), "Shifted 1 item list")
console.log(newLinkedList.shift(), "Shifted 0 item list")


