let a = 5,
  b = -4,
  c = 8;
console.log(
  (a >= 0 && b <= 0 && c <= 0) ||
    (a <= 0 && b >= 0 && c <= 0) ||
    (a <= 0 && b <= 0 && c >= 0)
);

// const [a, b, c] = [-5, -4, -8];
// console.log((a > 0) + (b > 0) + (c > 0) === 1);
