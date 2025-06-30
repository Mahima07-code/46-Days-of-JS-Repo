const table1 = document.getElementById("periodic-table");

for (let p = 1; p <= 7; p++) {
  const periodLabel = document.createElement("div");
  periodLabel.className = "period-label";
  periodLabel.textContent = p;
  table1.appendChild(periodLabel);

  for (let g = 1; g <= 18; g++) {
    const wrapper = document.createElement("div");
    wrapper.className = "element-wrapper";

    const cell = document.createElement("div");
    cell.setAttribute("data-period", p);
    cell.setAttribute("data-group", g);
    wrapper.appendChild(cell);
    table1.appendChild(wrapper);
  }
}

const lanthanidesRow = document.getElementById("lanthanides-row");
const actinidesRow = document.getElementById("actinides-row");

const flashcard = document.getElementById("flashcard");
const overlay = document.getElementById("overlay");

const nameEl = document.getElementById("card-name");
const imgEl = document.getElementById("card-img");
const symbolEl = document.getElementById("card-symbol");
const numberEl = document.getElementById("card-number");
const massEl = document.getElementById("card-mass");

elements.forEach(el => {
  const div = document.createElement("div");
  div.className = "element";

  if (el.block === "s") div.classList.add("s-block");
  else if (el.block === "p") div.classList.add("p-block");
  else if (el.block === "d") div.classList.add("d-block");
  else if (el.block === "f") div.classList.add("f-block");

  div.innerHTML = `<strong>${el.symbol}</strong><br><small>${el.number}</small>`;

  div.addEventListener("click", () => {
    nameEl.textContent = el.name;
    imgEl.src = el.image || "";
    symbolEl.textContent = el.symbol;
    numberEl.textContent = el.number;
    massEl.textContent = el.mass;
    overlay.style.display = "block";
    flashcard.style.display = "block";
  });

  if (el.number >= 57 && el.number <= 71) {
    lanthanidesRow.appendChild(div);
  } else if (el.number >= 89 && el.number <= 103) {
    actinidesRow.appendChild(div);
  } else {
    const target = document.querySelector(
      `#periodic-table div[data-period="${el.period}"][data-group="${el.group}"]`
    );
    if (target) target.appendChild(div);
  }
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  flashcard.style.display = "none";
});