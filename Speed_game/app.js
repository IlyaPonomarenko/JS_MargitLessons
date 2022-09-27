const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".endBtn");
const circles = document.querySelectorAll(".circle");
const score = document.querySelector(".score");
const overlay = document.querySelector(".overlay");
const refresh = document.querySelector(".btn");
const infoButton = document.querySelector(".infoBtn")
const finalResult = document.querySelector("#result")
const startAudio = new Audio('/sounds/mixkit-cool-interface-click-tone-2568.wav')
const endAudio = new Audio('/sounds/mixkit-negative-tone-interface-tap-2569.wav')
const infoAudio = new Audio('/sounds/lembas-elvish-waybread-one-small-bite-is-enough-to-fill-the-stomach-of-a-grown-man.wav')
let scoreCount = 0;
let active = 0;
let timer;
let speed = 1000;
let rounds = 0;

const playInfoAudio = () => {
  infoAudio.play();
}
const playAudioClick = () =>{
  startAudio.play();
}
const playAudioEnd = () => {
  endAudio.play()
}

const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const gameStart = () => {
  
  circles.forEach((circle) => {
    circle.style.pointerEvents="auto";
  });
  
  if (rounds >= 1) {
    gameEnd();
  } else {
    circles.forEach((circle) => {
      circle.classList.remove("active");
    });

    let nextActive = newNum(active);
    active = nextActive;
    timer = setTimeout(gameStart, speed);
    speed = speed - 50;

    function newNum(active) {
      let nextActive = getRndInt(0, 3);
      if (nextActive != active) {
        return nextActive;
      } else {
        return newNum(active);
      }
    }
    circles[nextActive].classList.add("active");
    rounds++;
  }
  
};
const gameEnd = () => {
  playAudioEnd();
  circles.forEach((circle) => {
    circle.classList.remove("active");
  });

  score.textContent = 0;
  clearTimeout(timer);

  if (scoreCount < 5){
    finalResult.textContent = `Your final score is ${scoreCount}. Are you even trying?`
  } else {
    finalResult.textContent = `Your final score is ${scoreCount}. Give it another try!`
  }
  
  overlay.style.visibility = "visible";
};

const clickDiv = (e) => {
  if (circles[e].classList.contains("active") == true) {
    playAudioClick();
    scoreCount++;
    rounds--;
    score.textContent = scoreCount;
  } else {
    gameEnd();
  }
};
circles.forEach((circle, e) => {
  circle.addEventListener("click", () => clickDiv(e));
});
const refreshPage = () => {
  window.location.reload();
};

startBtn.addEventListener("click", gameStart);
stopBtn.addEventListener("click", gameEnd);
refresh.addEventListener("click", refreshPage);
infoButton.addEventListener("click", playInfoAudio)