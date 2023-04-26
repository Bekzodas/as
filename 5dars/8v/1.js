let i = 1,
  s = 0,
  f = 0,
  x = 5;
while (i <= 8) {
  f = Math.pow(2, i) / (Math.pow(x, 2) + Math.pow(2, i + 1));
  s = s + Math.pow(x, 2) + f;
  i++;
}
console.log(x / s);
