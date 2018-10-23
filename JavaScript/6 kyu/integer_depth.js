function computeDepth(x) {
	let i = 1;
	let digits = [];
	while (digits.length != 10) {
		(x * i)
			.toString(10)
			.split("")
			.map(digit => {
				digits.indexOf(digit) === -1 ? digits.push(digit) : null;
			});
		i++;
	}
	return i - 1;
}
