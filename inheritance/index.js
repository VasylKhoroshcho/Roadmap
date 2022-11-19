class First {
  getName() {
    return `Class name is: ${this.name}`
  }
}

class Second extends First {
  constructor(name) {
    super();
    this.name = name;
  }
}


const test = new Second('Second class');

console.log(test.getName());


function FFirst() {}

FFirst.prototype.getName = function () {
  return `Class name is: ${this.name}`
}

const test2 = {
  name: 'SSecond class'
};

test2.__proto__ = new FFirst();

console.log(test2.getName());
