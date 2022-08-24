const btn = document.querySelector("#button");
const priceForL = document.querySelector("#input1");
const moneyPaid = document.querySelector("#input2");

btn.onclick = function () {
  let result = priceForL.value * moneyPaid.value;
  if ( result > 10 ) {
    document.querySelector(
      "#result"
    ).textContent = `You can get ${result} liters of gas, good, you can escape now!`;
  } else if(result !=0){
    document.querySelector(
      "#result"
    ).textContent = `You can get ${result} liters of gas, ups, you have to stay here!`;
  }
};
