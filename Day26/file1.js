async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");

    // Check if the response is okay
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

fetchData();

