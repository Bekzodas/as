let a = 1;
let b = 4;
let c = 8;
let min = 0,
  max = 0;
if (a > b) {
  max = a;
  min = b;
  if (a < c) {
    max = c;
  }
  if (b > c) {
    min = c;
  }
} else {
  max = b;
  min = a;
  if (b < c) {
    max = c;
  }
  if (a > c) {
    min = c;
  }
}
console.log(min, max);
