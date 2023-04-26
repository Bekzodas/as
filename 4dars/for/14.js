let n , sum;
n = 10;
sum = 0;
for(let i = 1; i <= 2*n - 1; i++)
{
	if(i % 2 !== 0){
		console.log(i);
		sum += i;
	}
}
console.log(sum);
