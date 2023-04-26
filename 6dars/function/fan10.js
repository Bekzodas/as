function Swap(a, b) {
  let s = a;
  a = b;
  b = a;
  a = s;
  console.log(a, b);
}

Swap(4, 2);
