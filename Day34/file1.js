// 📌 Why it matters?
// Falsy values play a major role in conditions, loops, logical operators, and default values using ||.


let name = "";
if (!name) {
  console.log("Name is empty!");  // This will run because "" is falsy
}
