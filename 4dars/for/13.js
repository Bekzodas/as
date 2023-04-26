let n = 20,
  sum = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    sum = 1 + i / 10;
  }
  if (i % 2 === 0) {
    sum = (-1) * (1 + i / 10);
  }
//   console.log(1 + i / 10);
//   console.log("The sum: ", sum);
}
 console.log("The sum: ", sum);
