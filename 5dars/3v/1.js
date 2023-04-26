let n = 4;
let a = 1;
let k = 1;
while (a < n) {
  a = k * a + 1 / k;
  k++;
}
console.log(a);
