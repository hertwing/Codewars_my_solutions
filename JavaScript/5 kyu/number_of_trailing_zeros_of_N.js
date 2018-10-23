function zeros(n) {
	let i = 0;
	while (n > 1) {
		n = Math.floor(n / 5);
		i += n;
	}
	return i;
}
