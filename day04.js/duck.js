// ✅  Duck Typing
//        If it looks like a duck and quacks like a duck… it is a duck.

let bird = {
  fly: function() {
    console.log("Flapping wings...");
  }
};

let plane = {
  fly: function() {
    console.log("Jet engines on!");
  }
};

function letItFly(flyer) {
  if (flyer.fly) {
    flyer.fly();  // JS doesn't care if it's a bird or plane
  } else {
    console.log("This thing can't fly.");
  }
}

letItFly(bird);   // "Flapping wings..."
letItFly(plane);  // "Jet engines on!"
