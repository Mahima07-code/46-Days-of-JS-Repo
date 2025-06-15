// ✅ Proxy Pattern

function fetchData() {
  console.log("Fetching data from API...");
}

const fetchProxy = (function () {
  let called = false;
  return function () {
    if (!called) {
      fetchData();
      called = true;
    } else {
      console.log("Using cached data.");
    }
  };
})();

fetchProxy(); // Fetching data from API...
fetchProxy(); // Using cached data.
