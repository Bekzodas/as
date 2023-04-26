function factorial(n) {
  if (n > 2) return n * factorial(n - 2);
  else return n;
}

console.log(factorial(7));
console.log(factorial(6));
