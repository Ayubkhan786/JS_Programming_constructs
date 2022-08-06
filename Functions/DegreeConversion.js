const prompt = require("prompt-sync")();
let option = prompt("Enter the Option 1 or 2 :");
let degree = prompt("Enter the degree to convert :");

if (option == 1) {
  console.log("Celcius to Farenheit ");
  CToF();
} else {
  console.log("Farenheit to Celcius ");
  FToC();
}
function CToF() {
  if (degree >= 0 && v <= 100) {
    let degf = degree * (9 / 5) + 32;
    console.log(degree + " celcius = " + degf + " Farenheit");
  } else {
    console.log("Enter between 0 to 100");
  }
}
function FToC() {
  if (degree > 31 && degree <= 212) {
    let degc = (degree - 32) * (5 / 9);
    console.log(degree + " farenheit = " + degc + " Celcius");
  } else {
    console.log("Enter between 31 to 212");
  }
}
