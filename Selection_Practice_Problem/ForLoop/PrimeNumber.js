let p = 10;
let n = 0;
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