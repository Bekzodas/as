let a = 9;
let b = 15;
let c = 87;
if (a + b > a + c) {
  if (a + b > b + c) {
    console.log(a, b);
  } else {
    console.log(b, c);
  }
} else {
  if (a + c > b + c) {
    console.log(a, c);
  } else {
    console.log(b, c);
  }
}
