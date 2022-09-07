let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.querySelector("body");
let direction = document.querySelector('input[name="direction"]');
let result = document.querySelector(".CSSoutput");

function StyleSelection() {
  let directionValue = document.querySelector(
    'input[name="direction"]:checked'
  ).value;
  body.style.background =
    "linear-gradient(" +
    directionValue +
    ", " +
    color1.value +
    "," +
    color2.value +
    ")";
  console.log(directionValue);
  currentSettings();
}
function currentSettings() {
  var css_string = window
    .getComputedStyle(body, null)
    .getPropertyValue("background-image");
  result.textContent = css_string;
}

body.addEventListener("change", StyleSelection);
color1.addEventListener("input", StyleSelection);
color2.addEventListener("input", StyleSelection);
