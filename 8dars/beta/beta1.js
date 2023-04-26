const chiqarish = (natija) => console.log(`natija: ${natija}`);

const sum = (a, b, callback) => {
  let s = a + b;
  callback(s);
};

sum(2, 3, chiqarish);
