
import { first, middle, last } from "random-name";

class randomName {
  generateFirstName() {
    return first();
  }

  generateMiddleName() {
    return middle();
  }

  generateLastName() {
    return last();
  }
}

const name =  new randomName();


class PlugComponent {
  constructor() {
    this.firstName = name.generateFirstName();
    this.middleName = name.generateMiddleName();
    this.lastName = name.generateLastName();
  }

  generateFullName() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`
  }
}

const names = new PlugComponent()
console.log(names.generateFullName()) // Victor Victor Jonah
