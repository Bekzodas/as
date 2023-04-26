let a = 5;
let b = 7;
if (a == b) {
  a = 0;
  b = 0;
} else {
  a += b;
  b = a;
}
console.log(a, b);
