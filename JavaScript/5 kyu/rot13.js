function rot13(message) {
	return message
		.split("")
		.map(value => {
			value = value
				.split("")
				.map(letter => {
					if (
						letter.charCodeAt(0) >= 65 &&
						letter.charCodeAt(0) <= 77
					) {
						letter = String.fromCharCode(letter.charCodeAt(0) + 13);
					} else if (
						letter.charCodeAt(0) > 77 &&
						letter.charCodeAt(0) < 91
					) {
						letter = String.fromCharCode(letter.charCodeAt(0) - 13);
					} else if (
						letter.charCodeAt(0) >= 97 &&
						letter.charCodeAt(0) <= 109
					) {
						letter = String.fromCharCode(letter.charCodeAt(0) + 13);
					} else if (
						letter.charCodeAt(0) > 109 &&
						letter.charCodeAt(0) < 123
					) {
						letter = String.fromCharCode(letter.charCodeAt(0) - 13);
					}
					return letter;
				})
				.join("");
			return value;
		})
		.join("");
}
