function Minmax(x, y) {
  let max = 0,
    min = 0;
  if (y > x) {
    max = y;
    min = x;
  } else {
    max = x;
    min = y;
  }
  console.log(min, max);
}

Minmax(24, 12);
