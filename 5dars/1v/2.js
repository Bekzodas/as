let s = 0;
let n = 5;
let k = 1;
while (k <= n) {
  s = s + 1 / Math.pow(k, 5);
  k++;
}
console.log("s =", s);
