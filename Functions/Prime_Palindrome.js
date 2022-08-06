let p = 10;
let n = 0;
findPrime();
findPalindrome();
function findPrime(){

for ( i = 1; i <= p; i++)
{
    if (p % i == 0)
    {
        n++;
    }
}
if (n == 2)
{
    console.log(" It is a Prime Number");
}
else
{
    console.log("It is Not a Prime Number");
}
}
function findPalindrome()
{
    //let val = 121,val1=num;
    let num;
        while (p > 0)
        {
           num =(num * 10) + (p % 10);
            p = p / 10;
        }
        if (num == p)
        {
           console.log("Its Palindrome");
        }
        else
        {
            console.log("Its not Palindrome");
        }
    }
  