let n , multipliedNumber;
n = 7;
multipliedNumber = 1;
for(let i = 1; i <= n; i++)
{
	console.log(
		1 + i / 10
	);
	multipliedNumber *= 1 + i / 10;
}
console.log(multipliedNumber);
