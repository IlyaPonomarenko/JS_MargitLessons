let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let body = document.querySelector("body");
let direction = document.querySelector('input[name="direction"]');
let result = document.querySelector(".CSSoutput");



function currentSettings() {
    var CSSprop = window.getComputedStyle(body,null).getPropertyValue("background-image")
    console.log(CSSprop)
    result.textContent = CSSprop
}

function StyleSelection() {
 let directionValue = document.querySelector('input[name="direction"]:checked').value;
  body.style.background =
    "linear-gradient(" +
    directionValue +
    ", " +
    color1.value +
    "," +
    color2.value +
    ")";
    console.log(directionValue)
    currentSettings()
}

direction.addEventListener("change",StyleSelection())
color1.addEventListener("input",StyleSelection)
color2.addEventListener("input",StyleSelection)