/* COMPOSITION */

class Wheel {
  constructor(count) {
    this.numberOfWheels = count;
  }
}

class Battery {
  constructor(voltage) {
    this.voltage = voltage;
  }
}

class Car {
  constructor() {
    this.wheels = new Wheel(4);
    this.battery = new Battery(12);
  }
}
