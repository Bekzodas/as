const n = parseInt(prompt("ikki xonalik son = "));

let a = Math.floor(n / 100);

let b = Math.floor((n / 10) % 10);

let c = Math.floor(n % 10);

console.log(a, c, b);
