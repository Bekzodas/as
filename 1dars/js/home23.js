const n = parseInt(prompt("ikki xonalik son = "));

let mt = 60;
let ht = 3600;

let h = Math.floor(n / ht);
let m = Math.floor(n / mt - h * mt);
let s = Math.ceil((n / mt - h * mt - m) * mt);

console.log("Soat = ", h);
console.log("Minut = ", m);
console.log("Secund = ", s);
