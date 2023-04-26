let d = 31;
let m = 3;

switch (m) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    if (d === 31) {
      m++;
      d = 1;
    } else d++;
    break;

  case 2:
    if (d === 28) {
      m++;
      d = 1;
    } else d++;
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    if (d === 30) {
      m++;
      d = 1;
    } else d++;
    break;
}

console.log(d, m);
