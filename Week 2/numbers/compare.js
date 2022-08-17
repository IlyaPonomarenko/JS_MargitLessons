const multip = () => {
  const FirstNum = parseInt(prompt("enter the first num"));
  const SecondNum = parseInt(prompt("enter the second num"));
  const ThirdNum = parseInt(prompt("enter the third num"));

  const sum = FirstNum + SecondNum + ThirdNum;
  const multiplication = FirstNum * SecondNum * ThirdNum;
  if (FirstNum < 0 && SecondNum < 0 && ThirdNum < 0) {
    console.log("All nums are negative");
  } else if (FirstNum >= 0 && SecondNum >= 0 && ThirdNum >= 0) {
    console.log(
      `"The sum of nums is: ${sum}`,
      `The multiplication of nums is: ${multiplication}"`
    );
  } else {
    console.log(`"The sum of nums is: ${sum}"`);
  }
};
multip();
