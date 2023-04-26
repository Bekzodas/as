let s = 0;
let n = 5;
let x = 1;
let i = 1;
f = 1;
while (i <= n) {
  f *= i;
  s += 1 / f + Math.sqrt(Math.abs(x));
  i++;
}
console.log(s);
