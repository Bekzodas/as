let n = 7,
  multipliedNumber = 1,
  sum = 0;
  for(let i = 1; i <= n; i++)
  {
	multipliedNumber *= i;
	sum += 1 / multipliedNumber;
	console.log(multipliedNumber);
  }
  console.log("The sum is equal to " , sum);
