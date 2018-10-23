function findUniq(arr) {
	let number = 0;
	number = arr
		.filter(function(element, index, array) {
			return element != array[0];
		})
		.find(function(element) {
			return element == element;
		});
	if (arr[0] != arr[1] && arr[0] != arr[2]) number = arr[0];

	return number;
}
