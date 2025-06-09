// Set for checking duplicate names
const nameSet = new Set();

// Map to store user and their scores
const scoreMap = new Map();

// Generator for unique user IDs
function* generateUserId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const userIdGen = generateUserId();

function addUser() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim();

  if (!name) {
    alert("Please enter a name!");
    return;
  }

  if (nameSet.has(name)) {
    alert("This user already exists!");
    input.value = "";
    return;
  }

  nameSet.add(name);

  const id = userIdGen.next().value;
  const score = Math.floor(Math.random() * 100); // Random score
  scoreMap.set(id, { name, score });

  updateUI();
  input.value = "";
}

function updateUI() {
  const list = document.getElementById("scoreList");
  list.innerHTML = "";

  for (let [id, user] of scoreMap) {
    const li = document.createElement("li");
    li.textContent = `ID: ${id}, Name: ${user.name}, Score: ${user.score}`;
    list.appendChild(li);
  }
}
