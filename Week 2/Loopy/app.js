// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
// }

// for (let i = 2; i <= 100; i += 2) {
//   console.log(i);
// }

let dist = 1;
do {
  dist = parseInt(prompt("Enter distance"));
  let time = parseInt(prompt("enter time"));
  let speed = `Average speed is: ${(dist / time).toFixed(2)} km/h`;
  console.log(speed);
} while (dist > 0);
