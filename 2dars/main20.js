let son = 123;
let birlik = son % 10;
let onlik = ((son % 100) - birlik) / 10;
let yuzlik = (son - birlik - onlik * 10) / 100;
console.log(birlik != onlik && birlik != yuzlik && onlik != yuzlik);
