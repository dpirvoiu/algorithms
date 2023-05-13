// We are going to reverse the HEAD and TAIL than take the values
// We will need to take the arrows and make them point the other way
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
    this.length++
    return this;
  }

  reverse(){
    let temp = this.head;
    this.head = this.tail; // Reverse Head and tail
    this.tail = temp;

    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;

  }
}

const newLinkedList = new LinkedList(2)
newLinkedList.push(2)
newLinkedList.push(4)


console.log(newLinkedList)
newLinkedList.reverse()
console.log(newLinkedList)


