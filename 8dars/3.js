function pow(a, b) {
  if (b < 1) return 1;
  else return a * pow(a, b - 1);
}
console.log(pow(2, 4));
