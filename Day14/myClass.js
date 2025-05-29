// Step 1: Define a Class (Blueprint)
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  drive() {
    console.log(`The ${this.color} ${this.brand} is driving!`);
  }
}

// Step 2: Create an Object (Real Car)
const myCar = new Car("Toyota", "Red");
myCar.drive();

// Step 3: Create a Factory Function (Car Maker)
function makeBlackTesla() {
  return new Car("Tesla", "Black");
}

const car1 = makeBlackTesla();
car1.drive();
