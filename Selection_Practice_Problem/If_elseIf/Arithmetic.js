//Arithmetic Operations

let x = 50,
  y = 60,
  z = 40;

let value1 = x + y * z;
let value2 = (x % y) + z;
let value3 = z + x / y;
let value4 = x * y + z;

//Maximum Number
if (value1 > value2 && value1 > value3 && value1 > value4) {
  console.log("Value one is Greater");
} else if (value2 > value3 && value2 > value4 && value2 > value1) {
  console.log("Value Two is Greater");
} else if (value3 > value4 && value3 > value1 && value3 > value2) {
  console.log("Value Three is Greater");
} else if (value4 > value1 && value4 > value2 && value4 > value3) {
  console.log("Value Four is Greater");
}
//Minimum Number
if (value1 < value2 && value1 < value3 && value1 < value4) {
  console.log("Value one is Lesser");
} else if (value2 < value3 && value2 < value4 && value2 < value1) {
  console.log("Value Two is Lesser");
} else if (value3 < value4 && value3 < value1 && value3 < value2) {
  console.log("Value Three is Lesser");
} else if (value4 < value1 && value4 < value2 && value4 < value3) {
  console.log("Value Four is Lesser");
}
