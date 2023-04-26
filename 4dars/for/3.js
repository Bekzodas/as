let a = 5;
let b = 9;
let xisob = 0;
if (a < b) {
  let c = a;
  a = b;
  b = c;
}

for (let i = a - 1; i > b; i--) {
  console.log(i);
  xisob++;
}
console.log("xisob : ", xisob);
