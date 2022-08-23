// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
// }

// let array = []
//  for (let i = 2; i <= 100; i += 2) {
//    array.push(i)
//  }
//  console.log(array.join(','));

// let dist = 1;
// do {
//   dist = parseInt(prompt("Enter distance"));
//   let time = parseInt(prompt("enter time"));
//   let speed = `Average speed is: ${(dist / time).toFixed(2)} km/h`;
//   console.log(speed);
// } while (dist > 0);


// let count = 0;
// for (let i = 0; i <= 19; i ++) {
//   num = parseInt(prompt("Enter a number"));
//   if (num % 2 == 0) {
//     count++;
//   } 
// }
// console.log(`Odds: ${(count)}`)

// let count = 0;
// let sum = 0;
// let input = 1;
// while (input != 0){
//   input = parseInt(prompt("Enter a number"));
//   sum = sum + input;
//   count ++;
// }
// let whole = Math.round(sum / count)
// console.log(`Average number is: ${whole}`);

// let count = 0;
// let sum = 0;
// for (let i = 0; i <= 24; i ++) {
//   num = parseInt(prompt("Enter a number"));
//   sum = sum + num;
//   count++;
// }
// let whole = Math.round(sum / count)
// console.log(`Average number is: ${whole}`);

// let count = 0;
// let sum = 0;
// do{
//   num = parseInt(prompt("Enter a number"));
//   input = prompt("Do you want to continue?");
//   sum = sum + num;
//   count ++;
// }while (input !="n" )
// let whole = Math.round(sum / count)
// console.log(`Average number is: ${whole}`);

// num = parseInt(prompt("How many numbers do you want to input?"));
// let array = []
//  for (let i = num; i > 0; i --) {
//   input = parseInt(prompt("Enter a number"));
//   array.push(input)
//  }
//  console.log(`The smallest number is: ${Math.min(...array)}`)

// let array = []
//  for (let i = 0; i <= 4; i ++) {
//   input = parseInt(prompt("Enter a number"));
//   array.push(input)
//  }
//  let max = Math.max(...array);
//  console.log(`First biggest number is: ${max}`)
//  array.splice(array.indexOf(max),1);
//  console.log(`Second biggest number is: ${(Math.max(...array))}`)


let count = 0;
let sum = 0;
for (let i = 0; i <= 4; i ++) {
    input = parseInt(prompt("Enter a number"));
    sum = sum + input;
    count ++;
   }

let whole = Math.round(sum / count)
console.log = (`Sum of nums is: ${sum}`);
console.log(`Average number is: ${whole}`);
