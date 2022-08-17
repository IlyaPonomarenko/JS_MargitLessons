const CalculateSalary = () => {
  const salary = parseFloat(window.prompt("Enter your salary", "0"));
  const hours = parseFloat(window.prompt("Enter how many hours worked", "0"));
  const cash = salary * hours;
  if (hours === 7) {
    console.log(`Your salary is ${cash} `);
  } else if (hours > 7 && hours <= 9) {
    let overSevenSalary = 0.5 * salary * (hours - 7) + cash;
    console.log(`Your salary is ${overSevenSalary} `);
  } else if (hours > 9) {
    let overSevenSalary = 2 * salary * (hours - 7) + cash;
    console.log(`Your salary is ${overSevenSalary} `);
  }
};
CalculateSalary();
