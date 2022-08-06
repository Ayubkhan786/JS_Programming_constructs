let head = 0;
let tail = 0;
let i = 1;
while (i <= 11) {
  let coin = Math.floor(Math.random() * 3) % 2;
  if (coin == 0) {
    console.log("Head");
    head += coin + 1;
  } else {
    console.log("Tail");
    tail += coin;
  }
  i++;
}
console.log("Total heads: " + head);
console.log("Total tails: " + tail);
if (head > tail) {
  console.log("Head Wins");
} else if (head < tail) {
  console.log("Tail Wins");
} else {
  console.log("Both Are Equal");
}
