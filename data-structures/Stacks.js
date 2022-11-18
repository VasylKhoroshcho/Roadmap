class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    const value = this.storage[--this.count];

    this.storage[this.count] = null;
    return value;
  }

  peek() {
    return this.storage[this.count - 1];
  }

  length() {
    return this.count;
  }
}

const stack = new Stack();

stack.push('one');
stack.push('two');
stack.push('three');
stack.push('four');

console.log(stack.peek());
console.log(stack.length());
stack.pop();
console.log(stack.length());
console.log(stack.peek());
stack.pop();
console.log(stack.length());
console.log(stack.peek());
