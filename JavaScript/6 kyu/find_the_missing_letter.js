function findMissingLetter(array) {
	let letter = "";
	array.reduce(function(prev, cur, index, array) {
		if (array[index].charCodeAt(0) - array[index - 1].charCodeAt(0) != 1)
			letter = String.fromCharCode(array[index].charCodeAt(0) - 1);
	});
	return letter;
}
