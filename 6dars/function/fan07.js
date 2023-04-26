// musbat +0
// manfiy -0

function InvertDigit(n) {
  let a, b, c;
  a = Math.floor(n / 100);
  b = Math.floor((n / 10) % 10);
  c = n % 10;
  return c * 100 + b * 10 + a;
}
console.log(InvertDigit(123));
