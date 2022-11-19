
class Cat {
  sound() {
    return 'meoow';
  }
}

class NullAnimal {
  sound() {
    return "not an animal";
  }
}

const getAnimal = (type) => {
  return type === 'cat' ? new Cat() : new NullAnimal();
}

const results = ['cat', null];

const response = results.map((animal) => getAnimal(animal).sound());
// ["meoow", "not an animal"]
