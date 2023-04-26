const n = parseInt(prompt("ikki xonalik son = "));

let t = 60;

let m = Math.floor(n / t);
let s = n - m * t;

console.log("Minut = ", m);
console.log("Secund = ", s);
