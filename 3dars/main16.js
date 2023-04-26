let a = 7;
let b = 45;
let c = 32;
if (a < b < c) {
  a *= 2;
  b *= 2;
  c *= 2;
} else {
  a = Math.sqrt(a);
  b = Math.sqrt(b);
  c = Math.sqrt(c);
}
console.log(a, b, c);
