function RectPS1(x1, y1) {
  let yuzasi = x1 * y1;
  return yuzasi;
}

function RectPS2(x2, y2) {
  let p = (x2 + y2) * 2;
  return p;
}

console.log("yuzasi: ", RectPS1(2, 2));
console.log("Perimetri: ", RectPS2(12, 12));
