const prompt = require("prompt-sync")();
let val = prompt("Enter the Number")
findPalindrome();
function findPalindrome()
{
    let num;
        while (val > 0)
        {
           num =(num * 10) + (val % 10);
            val = ( val / 10);
        }
        if (val==num)
        {
           console.log("Its Palindrome");
        }
        else
        {
            console.log("Its not Palindrome");
        }
    }
  