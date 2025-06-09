const myPromise = new Promise((resolve, reject) => {
  let success = true; // Simulate success or failure
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

myPromise
  .then((result) => {
    console.log(result); // Logs: "Operation successful!"
  })
  .catch((error) => {
    console.error(error); // Logs: "Operation failed!" if rejected
  });
