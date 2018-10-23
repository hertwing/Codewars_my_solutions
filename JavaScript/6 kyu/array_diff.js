function array_diff(a, b) {
	return a.filter(val_1 => !b.some(val_2 => val_1 === val_2));
}
