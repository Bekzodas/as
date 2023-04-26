let son = 1;
let birlik = 5;
let javob = 0;
switch (birlik) {
  case 1:
    javob = son;
    break;
  case 2:
    javob = son / 1000000;
    break;
  case 3:
    javob = son / 1000;
    break;
  case 4:
    javob = son * 1000;
    break;
  case 5:
    javob = son * 100;
    break;
}
console.log(javob);
