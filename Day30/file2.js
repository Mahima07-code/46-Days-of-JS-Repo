// -- Polymorphism -- 

class Animal {
  sound() {
    console.log("Some sound");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}

const cat = new Cat();
cat.sound(); // Outputs "Meow"
