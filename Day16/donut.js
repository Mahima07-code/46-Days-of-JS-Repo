// 🍩 Donut Constructor - This is our Donut-making machine!
function Donut(flavor) {
  this.flavor = flavor;
  this.eat = function () {
    console.log(`Yum! Eating a ${this.flavor} donut 😋`);
  };
}

// 🛠️ Using 'new' to create donuts (instances)
const chocoDonut = new Donut("Chocolate");
const strawberryDonut = new Donut("Strawberry");

// 🎯 Checking instances
console.log(chocoDonut instanceof Donut);        // true
console.log(strawberryDonut instanceof Donut);   // true

// 😋 Eating donuts (method from the constructor)
chocoDonut.eat();         // Output: Yum! Eating a Chocolate donut 😋
strawberryDonut.eat();    // Output: Yum! Eating a Strawberry donut 😋
 