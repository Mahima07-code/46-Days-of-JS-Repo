const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats); 
dog.walk(); 

// Here, dog inherits from animal through the prototype.