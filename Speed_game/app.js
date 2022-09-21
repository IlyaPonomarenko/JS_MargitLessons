const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".endBtn");
const circles = document.querySelectorAll(".circle");
const score = document.querySelector(".score");
let scoreCount = 0;

const gameStart = () => {
  randomHighlight();
};
const gameEnd = () => {
  circles.forEach((circle) => {
    circle.classList.remove("active");
  });
};
const clickDiv = (e) => {
  console.log("clicked div", e);
  scoreCount++;
  score.innerText = scoreCount;
  randomHighlight();
};
const randomHighlight = () => {
    let randDiv = Math.floor(Math.random() * 4);
    setTimeout(()=>{
        circles.forEach((circle) => {
            circle.classList.remove("active");
          });
          console.log(randDiv);
          circles[randDiv].classList.add("active");
    },1000)
};

circles.forEach((circle, e) => {
  circle.addEventListener("click", () => clickDiv(e));
});
startBtn.addEventListener("click", gameStart);
stopBtn.addEventListener("click", gameEnd);
