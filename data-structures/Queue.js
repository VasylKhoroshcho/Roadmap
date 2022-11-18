class Queue {
  constructor() {
    this.count = 0;
    this.current = 0;
    this.last = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.last++] = value;
    this.count++;
  }

  pop() {
    const value = this.storage[this.current];
    if (this.count !== 0) {
      --this.count;

      delete this.storage[this.current];

      this.current++;
    }

    return value;
  }

  peek() {
    return this.storage[this.current];
  }

  length() {
    return this.count;
  }
}

const stack = new Queue();

stack.push("one");
stack.push("two");
stack.push("three");
stack.push("four");

console.log(stack.peek());
console.log(stack.length());
stack.pop();
console.log(stack.peek());
console.log(stack.length());
stack.pop();
console.log(stack.peek());
console.log(stack.length());
stack.pop();
console.log(stack.peek());
console.log(stack.length());
stack.pop();
console.log(stack.peek());
console.log(stack.length());
stack.pop();
console.log(stack.peek());
console.log(stack.length());


stack.push('five');
stack.push('six');

console.log(stack.peek());
console.log(stack.length());
stack.pop();
console.log(stack.peek());
console.log(stack.length());
