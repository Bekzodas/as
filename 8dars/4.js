function Fib1(n) {
  if (n < 2) return n;
  return Fib1(n - 1) + Fib1(n - 2);
}
console.log(Fib1(10));
