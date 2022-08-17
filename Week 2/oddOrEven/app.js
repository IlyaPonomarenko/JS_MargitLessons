const check = () => {
  const num = parseInt(window.prompt("enter the num"));
  console.log(num);
  if (num > 0) {
    console.log("Num is positive");
    if (num % 2 == 0) {
      console.log("Num is odd");
    } else {
      console.log("not odd");
    }
  } else if (num < 0) {
    console.log("not positive");
  }
};

check();
