class Person {
  constructor(name) {
    this.name = name;
  }
}


try {
  const person = Person('MyName');
  console.log('person', person)
} catch(err) {
  console.log(err.message);
}


const newPerson = new Person('Jack')
console.log('newPerson', newPerson)


const employee = Object.create(newPerson, { comp: { value: 'Rolique' } });

console.log(employee.name)
console.log(employee.comp)


const employeeOfTheMonth = Object.assign(newPerson, { comp: 'Rolique' }, { rate: '5 stars'});

console.log(employeeOfTheMonth.name)
console.log(employeeOfTheMonth.comp)
console.log(employeeOfTheMonth.rate)
