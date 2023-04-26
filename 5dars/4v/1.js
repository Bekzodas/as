let v1 = 0;
let v2 = 0;
let v3 = 1.5;
let vn = 0;
let n = 7;
let i = 4;
while (i >= n) {
  vn = ((i + 1) / (i * i + 1)) * v3 - v2 * v1;

  v1 = v2;
  v2 = v3;
  v3 = vn;

  i++;
}

console.log(vn);
