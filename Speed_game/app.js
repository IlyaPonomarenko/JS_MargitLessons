const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".endBtn");
const circles = document.querySelectorAll(".circle");
const score = document.querySelector(".score");
const overlay = document.querySelector(".overlay")
const refresh = document.querySelector(".btn")
let scoreCount = 0;
let active = 0;
let timer;
let speed = 1000;

const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const gameStart = () => {
  circles.forEach((circle) => {
    circle.classList.remove("active");
  });
  let nextActive = newNum(active);
  active = nextActive;
  console.log(active);
  timer = setTimeout(gameStart, speed);
  speed = speed -5;
  function newNum(active) {
    let nextActive = getRndInt(0, 3);
    if (nextActive != active) {
      return nextActive;
    } else {
      return newNum(active);
    }
  }
  circles[nextActive].classList.add("active");
};
const gameEnd = () => {
  circles.forEach((circle) => {
    circle.classList.remove("active");
  });
  score.textContent = 0;
  clearTimeout(timer);
  overlay.style.visibility = "visible"
};

const clickDiv = (e) => {
  console.log("clicked div", e);
  if (circles[e].classList.contains("active")== true) {
    scoreCount++;
    score.textContent = scoreCount;
  } else {
    gameEnd();
  }
};
circles.forEach((circle, e) => {
  circle.addEventListener("click", () => clickDiv(e));
});
const refreshPage = () =>{
    window.location.reload()
}


startBtn.addEventListener("click", gameStart);
stopBtn.addEventListener("click", gameEnd);
refresh.addEventListener("click",refreshPage)