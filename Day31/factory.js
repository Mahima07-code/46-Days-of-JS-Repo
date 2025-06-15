// ✅ Factory Pattern

class Car {
  constructor() {
    this.type = "Car";
  }
}

class Bike {
  constructor() {
    this.type = "Bike";
  }
}

function VehicleFactory(type) {
  switch (type) {
    case "car":
      return new Car();
    case "bike":
      return new Bike();
    default:
      return null;
  }
}

const myVehicle = VehicleFactory("bike");
console.log(myVehicle.type); // "Bike"
