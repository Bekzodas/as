let n , sum;
n = 10;
sum = 0;
for(let i = 0; i < 2 * n; i++)
{
  sum += Math.pow(n + i , 2);
}
console.log(sum);
