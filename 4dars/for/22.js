let x = 4,
  n = 6,
  multipliedNumber = 1,
  sum = 0;
for(let i = 1; i <= n; i++)
{
	multipliedNumber *= i;
	sum += Math.pow(x , i) / multipliedNumber;
	console.log(multipliedNumber);
}
console.log(sum);
