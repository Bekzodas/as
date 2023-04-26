let kun = 40;
let ai = 2;

switch (ai) {
  case 2:
    if (kun > 28) {
      ai++;
      kun -= 29;
    }
    break;

  default:
    break;
}
console.log(ai, kun);
