class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedLists {
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
      newNode.prev = this.tail; // previous node
      this.tail.next = newNode; // next node
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

    currentNode.prev = null; // set current connect to null
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
    this.head = temp.next;
    this.head.prev = null;
    this.length--;
    if(!this.length) {
      this.head = null;
      this.tail = null;
    }

    temp.next = null; // cut connected
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const temp = this.head;
      temp.prev = newNode;
      this.head = newNode;
      this.head.next = temp;
    }

    this.length++;
    return this;
  }

  get(index) {
    if(!this.head || !this.length || index < 0 || index > this.length - 1) return null;

    let value = null;
    if(index > Math.floor(this.length/2)) {
      value = this.tail;
      while(index < this.length - 1) {
        value = value.prev;
        index++;
      }
    }
    else {
      value = this.head;
      while(index > 0) {
        value = value.next;
        index--;
      }
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
    if(index === 0) return !!this.unshift(val);
    else if (index === this.length - 1) return !!this.push(val);

    const newNode = new Node(val);
    const preValueOfindex = this.get(index - 1);
    const temp = this.get(index)
    if(preValueOfindex && temp) {
      temp.prev = newNode;
      newNode.next = temp;
      newNode.prev = preValueOfindex;
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
      temp.next.prev = preValueOfindex;
      preValueOfindex.next = temp.next;
      this.length--;
      return true;
    }

    return false;
  }
}

const lists = new DoublyLinkedLists();
lists.push("00");
lists.push("11");
lists.push("22");
lists.push("33");
lists.push("44");
lists.push("55");
lists.push("66");
lists.push("77");
lists.push("88");

console.log(lists.get(7))
