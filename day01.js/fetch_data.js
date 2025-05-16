console.log("1: Start data request");

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("2: Data received", data.title);
  });

console.log("3: Do something else while waiting");


// 🪄 Explanation :-
// console.log("1: Start data request")
// → JavaScript bolta hai: "Chalo data lene chalte hain"

// fetch(...)
// → Ye kaam Web API ko de diya: "Tum jaake server se data le aao, jab mil jaye to mujhe batana"

// console.log("3: Do something else while waiting")
// → Jab tak data aata hai, JavaScript koi aur kaam karta hai — time waste nahi karta!

// Jab server data bhej deta hai, Web API ke helpers bolte hain:
// "Lo bhai, data aagaya" — fir .then() wali line run hoti hai.