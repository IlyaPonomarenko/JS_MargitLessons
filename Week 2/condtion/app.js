const age = Number(prompt("What is your age?"));

if (age < 18) {
  alert("too young");
} else if (age < 27) {
  alert("right age");
} else if (age < 41) {
  alert("reserve");
} else if (age < 55) {
  alert("back up");
} else {
  alert("error");
}
