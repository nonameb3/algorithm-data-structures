class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // previous node
      this.tail = newNode; // last node
    }
    this.length++;
    return this;
  }

  pop() {
    if(!this.head || !this.length) return undefined;

    let currentNode = this.head;
    let previousNode = currentNode;
    while(currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
    this.tail = previousNode;
    this.length--;
    if(!this.length) {
      this.head = null;
      this.tail = null;
    }
    
    return currentNode;
  }

  shift() {
    if(!this.head || !this.length) return undefined;

    const temp = this.head;
    this.head = this.head.next;
    this.length--;
    if(!this.length) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }

    this.length++;
    return this;
  }

  get(index) {
    if(!this.head || !this.length || index < 0 || index > this.length - 1) return null;

    let value = this.head;
    while(index > 0) {
      value = value.next;
      index--;
    }

    return value;
  }

  set(index, val) {
    const valueOfindex = this.get(index);
    if(!valueOfindex) return false;

    valueOfindex.val = val;
    return true;
  }

  insert(index, val) {
    if(index === 0)return !!this.unshift(val);
    else if (index === this.length - 1) return !!this.push(val);

    const newNode = new Node(val);
    const preValueOfindex = this.get(index - 1);
    const temp = this.get(index)
    if(preValueOfindex && temp) {
      newNode.next = temp;
      preValueOfindex.next = newNode;
      this.length++;
      return true;
    }

    return false;
  }

  remove(index) {
    if(index === undefined || index === null) return false;
    if(index === 0) return !!this.shift();
    if(index === this.length-1) return !!this.pop();

    const preValueOfindex = this.get(index - 1);
    const temp = this.get(index)
    if(preValueOfindex && temp) {
      preValueOfindex.next = temp.next;
      this.length--;
      return true;
    }

    return false;
  }

  reversing() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let previous = null;

    let i=0;
    while(i < this.length) {
      next = node.next;
      node.next = previous;

      previous = node;
      node = next;
      i++
    }
    return this;
  }
}

const link = new SinglyLinkedLists();
link.push("hi");
link.push("there");
link.push("I am waraphon");
link.shift();
link.unshift("unShift")
link.set(2, 'reInput')
link.insert(1, "insert")

console.log(link.reversing())
console.log(link.get(2))
console.log(link.remove())