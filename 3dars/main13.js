let a = 7;
let b = 5;
let c = 3;
let orta;
if ((a < b && b < c) || (c < b && b < a)) {
  orta = b;
}
if ((b < c && c < a) || (a < c && c < b)) {
  orta = c;
}
if ((b < a && a < c) || (c < a && a < b)) {
  orta = a;
}
console.log(orta);
