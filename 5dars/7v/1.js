let i = 103;
let s = 0;
let mahraj = i;

while (i > 2) {
  mahraj = i - 2 + 1 / mahraj;
  i -= 2;
}
console.log(mahraj);
