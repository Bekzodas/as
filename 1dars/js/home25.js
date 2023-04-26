const n = parseInt(prompt("N = "));

let sum = 365 - n;

if (sum < 7) {
  sum = 1;
  console.log("dushanba");
}
if (sum < 7) {
  sum = 2;
  console.log("seshanba");
}
if (sum < 7) {
  sum = 3;
  console.log("chorshanba");
}
if (sum < 7) {
  sum = 4;
  console.log("payshanba");
}
if (sum < 7) {
  sum = 5;
  console.log("juma");
}
if (sum < 7) {
  sum = 6;
  console.log("shanba");
}
if (sum < 7) {
  sum = 0;
  console.log("yakshanba");
}
