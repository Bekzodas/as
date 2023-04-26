function SortInc3(a, b, c) {
  let min, ort, max;
  if (a < b && a < c) {
    min = a;
  } else if (b < a && b < c) {
    min = b;
  } else min = c;

  if (a > b && a > c) {
    max = a;
  } else if (b > a && b > c) {
    max = b;
  } else max = c;

  if (a > min && max > a) {
    ort = a;
  } else if (b > min && max > b) {
    ort = b;
  } else ort = c;
  console.log(max, ort, min);
}

SortInc3(23, 12, 44);
