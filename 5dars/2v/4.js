let s = 1;
let n = 5;
let x = 1;
let i = 1;
f = 1;
while (i <= n) {
  f *= i;
  s *= 1 + Math.sin(i * x) / f;
  i++;
}
console.log(s);
