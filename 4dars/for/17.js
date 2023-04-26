let a , n , sum = 0;
a = 2;
n = 5;
for(let i = 1; i <= n; i++)
{
	console.log(
		Math.pow(a , i)
	);
	sum += Math.pow(a , i);
}
console.log(sum);
