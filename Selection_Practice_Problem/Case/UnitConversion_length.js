const prompt = require("prompt-sync")();
let option = prompt(
  "choose 1 for feet/inches , 2 for inches/feet , 3 for feet/meter , 4 for meter/feet :"
);
switch (option) {
  case 1:
    let feet1 = prompt("Enter the Feet to convert Into Inches :");
    let inch = 12;
    ConvertedValue = feet1 * inches;
    console.log("ConvertedValue = " + ConvertedValue + " " + "Inches");
    break;

  case 2:
    let inches = prompt("Enter the inches to convert Into feet :");
    let feet2 = 0.0833333;
    ConvertedValue = inches * feet2;
    console.log("ConvertedValue = " + ConvertedValue + " " + "feet");
    break;

  case 3:
    let feet3 = prompt("Enter the feet to convert Into meter :");
    let meter = 0.3048;
    ConvertedValue = feet3 * meter;
    console.log("ConvertedValue = " + ConvertedValue + " " + "meter");
    break;

  case 4:
    let meters = prompt("Enter the meter to convert Into feet :");
    let feet4 = 3.28084;
    ConvertedValue = meter * feet4;
    console.log("ConvertedValue = " + ConvertedValue + " " + "feet");
    break;
}
