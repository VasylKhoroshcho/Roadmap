/* AGGREGATION */

class Employee {
  constructor(name) {
    this.name = name;
  }
}

const employee1 = new Employee('John');
const employee2 = new Employee('Ben');
const employee3 = new Employee('Nick');

class Company {
  constructor() {
    this.employees = [employee1, employee2, employee3];
  }
}
