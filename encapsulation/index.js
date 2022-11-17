/*  ENCAPSULATION  */

class Encapsulation {
  #hiddenName;
  constructor(name) {
    this.#hiddenName = name;
  }


  getName() {
    return this.#hiddenName;
  }

  setName(name) {
    this.#hiddenName = name;
  }
}


const classTest = new Encapsulation('Name');

console.log(classTest.getName()); // => 'Name'
console.log(classTest.hiddenName); // => 'undefined'

classTest.setName('Name-2');

console.log(classTest.getName()); // => 'Name-2'
console.log(classTest.hiddenName); // => still 'undefined'


/* ABSTRACTION */

class Employee{
  #name;
  #baseSalary;


  setName(val){
      this.#name = val;
  }
  setBaseSalary(val){
      this.#baseSalary = val;
  }

  getName(){
      return this.#name;
  }

  getSalary(){
      let bonus = 1000;
      return this.#baseSalary + bonus; // The magic here is hidden from the user only the result is matters
  }
}

const emp = new Employee();
emp.setName("EmployeeOfTheYear");
emp.setBaseSalary(100);
console.log(emp.getName()); // => EmployeeOfTheYear
console.log(emp.getSalary()); // => It is not 100 but 1100


/* INHERITANCE */

class Person{
  constructor(name){
      this.name = name;
  }
  sayName(){
      console.log(this.name);
  }
}
class WebDev extends Person{
  constructor(name, skill){
      super(name);
      this.skill = skill;
  }
  logDetails(){
      console.log(`Name: ${this.name}, Skill: ${this.skill}`)
  }
}

const developer = new WebDev('Vasyl', 'NodeJs');
developer.logDetails();    // Name: Vasyl, Skill: NodeJs
developer.sayName();       // Vasyl


console.log(developer.__proto__) // => Person obj
console.log(developer.__proto__.__proto__.__proto__.__proto__) // => null

/* POLYMORPHISM */

class Animal {
    speak() {
      console.log("Animals have different sounds");
    }
}

class Cat extends Animal {
  speak() {
    console.log("Cat says Meow Meow");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog say Woof Woof");
  }
}

const x = [new Cat(), new Dog()];
x.forEach(instance => instance.speak());
