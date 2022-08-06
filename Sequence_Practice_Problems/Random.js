console.log("Welcome to Random in Programming Constructs");

//Random Function to get Single Digit
let x = Math.floor(Math.random() * 10);
console.log("SingleDigit :" + x);

//Random to get Dice Number between 1 to 6
let diceNum = Math.floor(Math.random() * 6) + 1;
console.log('Dicenum :' + diceNum);

//Adding two Random Dice Number and Printing the Result
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let Result= dice1+dice2;
console.log("Addition of Two Random Numbers :" + Result);

//Program that reads 5 Random 2 Digit values and Prints their sum and the average
let Num1=Math.floor(Math.random() * 100) + 10;
let Num2=Math.floor(Math.random() * 100) + 10;
let Num3=Math.floor(Math.random() * 100) + 10;
let Num4=Math.floor(Math.random() * 100) + 10;
let Num5=Math.floor(Math.random() * 100) + 10;
let Sum = Num1+Num2+Num3+Num4+Num5;
let Average =((Num1+Num2+Num3+Num4+Num5)/5);
console.log("Sum :"+ Sum +" "+ "Average :" + Average);
