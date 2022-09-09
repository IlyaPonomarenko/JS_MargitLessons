const form = document.querySelector("#form");
const display = document.querySelector("#display");
const btn = document.querySelector("#btn");
const Input = document.querySelector("#sinput");
const res = document.querySelector("#result");
let container = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let entry = {
    licence: document.getElementById("licNum").value,
    maker: document.getElementById("carMan").value,
    model: document.getElementById("carMod").value,
    owner: document.getElementById("carOwn").value,
    price: document.getElementById("carPri").value,
    color: document.getElementById("carCol").value,
  };
  container.push(entry);
  document.forms[0].reset();
  let tableR = display.getElementsByTagName("tbody")[0].insertRow();
  tableR.insertCell().textContent = entry.licence;
  tableR.insertCell().textContent = entry.maker;
  tableR.insertCell().textContent = entry.model;
  tableR.insertCell().textContent = entry.owner;
  tableR.insertCell().textContent = entry.price;
  tableR.insertCell().textContent = entry.color;
});

//Onis helped me out with this one
btn.addEventListener("click", () => {
  const match = container.findIndex((car) => car.licence === Input.value);
  if (match === -1) {
    res.textContent = `No car found`;
  } else {
    res.textContent = `Car by license ${container[match].licence} made by ${container[match].maker} and the owner is ${container[match].owner}`;
  }
});
