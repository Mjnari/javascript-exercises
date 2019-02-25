function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (numArray) {
	let calcSum = 0;
	for(let i = 0; i < numArray.length; i++)
		calcSum += numArray[i];
	return calcSum;
}

function multiply (numArray) {
	let calcProduct = 0;
	if (numArray.length > 0)
		calcProduct = 1;
	for(let i = 0; i < numArray.length; i++)
		calcProduct = calcProduct * numArray[i];
	return calcProduct;
}

function power(x, y) {
	return x ** y;
}

function factorial(x) {
	if(x == 0)
		return 1;
	let product = 1;
	while(x > 0){
		product = product * x;
		x--;
	}
	return product;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}