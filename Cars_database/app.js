const form = document.querySelector("#form");
const display = document.querySelector("#display");

form.addEventListener("submit", function (e) {
 let container = [];
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
            console.log(entry);
            console.log(container);
  for (item of container){
    let tableR = display.getElementsByTagName('tbody')[0].insertRow();
    tableR.insertCell().textContent = item.licence;
    tableR.insertCell().textContent = item.maker;
    tableR.insertCell().textContent = item.model;
    tableR.insertCell().textContent = item.owner;
    tableR.insertCell().textContent = item.price;
    tableR.insertCell().textContent = item.color;
  }
 container = [];
   
});
