function mainFunc() {
	console.log(fun(4));
	return 0;
}

function fun(n) {
	if (n === 0) return 1;
	return 7 + fun(n - 2);
}
mainFunc();

// sum = 7 + 2 = 9
// sum = sum + n-2 = 9 + 