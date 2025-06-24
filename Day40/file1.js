const user = {
  name: "Mahima",
  age: 25
};

const userProxy = new Proxy(user, {
  get(target, property) {
    console.log(`Accessing property: ${property}`);
    return Reflect.get(target, property); // default behavior
  },
  set(target, property, value) {
    if (property === "age" && typeof value !== "number") {
      throw new TypeError("Age must be a number");
    }
    console.log(`Setting ${property} to ${value}`);
    return Reflect.set(target, property, value); // default behavior
  }
});

// Using the proxy
console.log(userProxy.name);      // logs: Accessing property: name → Mahima
userProxy.age = 26;              // logs: Setting age to 26
// userProxy.age = "twenty";     // throws TypeError


// 🧠 What's Happening?
// When you access userProxy.name, the get trap runs.
// When you set userProxy.age, the set trap checks type and sets it.
// Reflect.get and Reflect.set are used to preserve native behavior safely.
