let a = 5;
let b = 7;
if (a == b) {
  a = 0;
  b = 0;
} else {
  if (a > b) {
    b = a;
  } else {
    a = b;
  }
}
console.log(a, b);
