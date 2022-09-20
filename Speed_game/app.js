const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".endBtn");
const circles = document.querySelectorAll(".circle")

const gameStart = () =>{
    console.log("game started")
}
const gameEnd = () =>{
    console.log("game end")
}

startBtn.addEventListener("click", gameStart);
stopBtn.addEventListener("click", gameEnd);