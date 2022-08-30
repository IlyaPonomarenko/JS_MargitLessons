const btn = document.querySelector("#btn");
let checkout = document.querySelector("#btn2");
checkout.disabled = true;

btn.onclick = function () {
  //Corresponding price is assigned according to the selected size
  const size = document.querySelector('input[name="size"]:checked').value;
  let sizePrice = 0;
  switch (size) {
    case "2":
      sizePrice += 7.5;
      break;
    case "4":
      sizePrice += 10.5;
      break;
    case "6":
      sizePrice += 12.5;
      break;
    case "8":
      sizePrice += 15.5;
      break;
  }

  const toppings = document.getElementsByName("topping");
  let toppingPrice = 0;
  let toppingsSelected = [];
  //Toppings assinged to and array
  for (let i = 0; i < toppings.length; i++) {
    if (toppings[i].checked) {
      toppingsSelected.push(toppings[i].value);
    }
  }
  //If more than 4 toppings = increase in price for each additional topping
  let amountSel = toppingsSelected.length;
  console.log(amountSel);
  switch (amountSel) {
    case 0:
      alert("You forgot about toppings!");
    case 4:
      console.log("Nothing");
      break;
    case 5:
      toppingPrice += 0.5;
      break;
    case 6:
      toppingPrice += 1;
      break;
    case 7:
      toppingPrice += 1.5;
      break;
    case 8:
      toppingPrice += 2;
      break;
    case 9:
      toppingPrice += 2.5;
      break;
  }
  //Chosen delivery method is checked
  const delivery = document.querySelector(
    'input[name="delivery"]:checked'
  ).value;
  let deliveryPrice = 0;
  if (delivery === "Home") {
    deliveryPrice += 5;
  }
  //Total price of orded is calculated
  let totalPrice = sizePrice + toppingPrice + deliveryPrice;
  //Displaying the selected values to the user
  document.querySelector(
    "#chosen-size-res"
  ).textContent = `Chosen size: for ${size}`;
  document.querySelector(
    "#selected-toppings-res"
  ).textContent = `Selected toppings: ${toppingsSelected.join(", ")}`;
  document.querySelector(
    "#delivery-res"
  ).textContent = `Delivery method: ${delivery}`;
  document.querySelector(
    "#totalPrice-res"
  ).textContent = `Total price: ${totalPrice}€`;

  stateHandle(amountSel);
  orderConfirm();
};

//Check if the user made an edible pizza
function stateHandle(amountSel) {
  if (amountSel === 0) {
    checkout.disabled = true;
  } else {
    checkout.disabled = false;
  }
}

//Confirmation of the order
function orderConfirm() {
  checkout.onclick = (event) => {
    if (!alert("Thank you! Your order has been recieved!")) {
      window.location.reload();
    }
  };
}
