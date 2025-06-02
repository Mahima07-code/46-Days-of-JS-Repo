const car = {
  wheels: 4,
  start() {
    console.log("Car started");
  }
};

const myCar = Object.create(car);
myCar.color = "red";

console.log(myCar.wheels); 
myCar.start();             
