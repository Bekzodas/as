let n,
  multipliedNumber = 1,
  sum = 0;
n = 7;
for (let i = 1; i <= n; i++) {
  multipliedNumber *= i;
  sum += multipliedNumber;
  console.log("The multiplication is equal to " + multipliedNumber);
}
console.log("The sum is equal to: " + sum);
