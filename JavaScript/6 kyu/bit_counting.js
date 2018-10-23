var countBits = function(n) {
	n = n.toString("2");
	let sum = 0;
	for (i = 0; i < n.length; i++) {
		if (parseInt(n.charAt(i), 10)) sum++;
	}
	return sum;
};
