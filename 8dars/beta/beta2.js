function factorial(n) {
  if (n == 1) return 1;
  else return n * factorial(n - 1);
}

function pow(a, b) {
  if (b < 1) return 1;
  else return a * pow(a, b - 1);
}
console.log(pow(2, 4));
