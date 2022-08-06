console.log("Minimun and Maximum of Five Random Numbers");

//This program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum values
let Num1=Math.floor(Math.random() * 999) + 100;
let Num2=Math.floor(Math.random() * 999) + 100;
let Num3=Math.floor(Math.random() * 999) + 100;
let Num4=Math.floor(Math.random() * 999) + 100;
let Num5=Math.floor(Math.random() * 999) + 100;

if( Max = Math.max(Num1,Num2,Num3,Num4,Num5)){
    console.log("The MaximumValue :" + Max);
}
if (Min = Math.min(Num1,Num2,Num3,Num4,Num5)){
    console.log("The MinimumValue :" + Min);
}