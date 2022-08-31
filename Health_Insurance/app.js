const form = document.querySelector("form");
const customer = document.querySelector("#name");
const age = document.querySelector("#age");
let ageScore = 500;
const calculateScore = (event) => {
  let customerName = customer.value;
  let customerAge = age.value;
  
  if (customerAge < 18) {
  } else if (customerAge >= 18 && customerAge <= 25) {
    ageScore = ageScore * 0.1 + ageScore;
  } else if (customerAge >= 26 && customerAge <= 35) {
    ageScore = ageScore * 0.3 + ageScore;
  } else if (customerAge >= 36 && customerAge <= 45) {
    ageScore = ageScore * 0.6 + ageScore;
  } else if (customerAge >= 46 && customerAge <= 55) {
    ageScore = ageScore * 1.0 + ageScore;
  } else if (customerAge >= 56 && customerAge <= 65) {
    ageScore = ageScore * 1.5 + ageScore;
  } else if (customerAge >= 66) {
    ageScore = ageScore * 2.01 + ageScore;
  }
  console.log(ageScore);

  const healthConditons = document.getElementsByName("conditions");
  conditionsSelected = [];
  healthConditons.forEach((item) => {
    if (item.checked) {
      conditionsSelected.push(item.value);
    }
  });

  //Score for conditions
  let conditionsChecked = conditionsSelected.length;
  switch (conditionsChecked) {
    case 0:
      break;
    case 1:
      ageScore = ageScore * 0.01 + ageScore;
      break;
    case 2:
      ageScore = ageScore * 0.02 + ageScore;
      break;
    case 3:
      ageScore = ageScore * 0.03 + ageScore;
      break;
  }
  console.log(ageScore)

  //Bad habits calculate
  const badHabits = document.getElementsByName("badhabits");
  badhabitsSelected = [];
  badHabits.forEach((item) => {
    if (item.checked) {
      badhabitsSelected.push(item.value);
    }
  });
  let badHabitsAmount = badhabitsSelected.length;
  switch (badHabitsAmount) {
    case 0:
      break;
    case 1:
      ageScore = ageScore * 0.01 + ageScore;
      break;
    case 2:
      ageScore = ageScore * 0.02 + ageScore;
      break;
    case 3:
      ageScore = ageScore * 0.03 + ageScore;
      break;
    case 4:
      ageScore = ageScore * 0.04 + ageScore;
      break;
  }

  
  console.log(ageScore)
  //good habits calculate
  const goodHabits = document.getElementsByName("goodhabits");
  goodhabitsSelected = [];
  goodHabits.forEach((item) => {
    if (item.checked) {
      goodhabitsSelected.push(item.value);
    }
  });
  let goodHabitsAmount = goodhabitsSelected.length;
  switch (goodHabitsAmount) {
    case 0:
      break;
    case 1:
      ageScore = ageScore-(ageScore * 0.01) ;
      break;
    case 2:
      ageScore = ageScore-(ageScore * 0.02);
      break;
    case 3:
      ageScore = ageScore-(ageScore * 0.03);
      break;
    case 4:
      ageScore = ageScore-(ageScore * 0.04);
      break;
  }
  console.log(ageScore)
  window.alert(`${customerName}, your insurance score is ${ageScore.toFixed(0)}`)
  form.reset()
};

form.addEventListener("submit", calculateScore);
