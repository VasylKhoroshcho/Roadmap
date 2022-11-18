// If it walks like a duck and it quacks like a duck, then it must be a duck !!!

class Duck {
  swim() {
    console.log("Duck swimming")
  }

    fly() {
      console.log("Duck flying")
    }
}


class Whale{

  swim() {

    console.log("Whale swimming")
  }
}

const duck = new Duck();
const whale = new Whale();
[duck, whale].map(animal => {
  animal.swim();
  animal.fly();
})
