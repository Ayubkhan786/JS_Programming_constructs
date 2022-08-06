console.log("Prime factor of given number ");
let n = 20;
for (let i = 2; i <= n / 2; i++) {
   while(n % i == 0) {
    console.log(i);
    n = n / i;
  }
}
if (n > 1) {
  console.log(n);
} else {
  console.log("Invalid");
}
