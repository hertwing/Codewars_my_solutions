function alphabetPosition(text) {
	return text
		.replace(/[^A-Za-z]/g, "")
		.toLowerCase()
		.split("")
		.map(word => word.charCodeAt(0) - 96)
		.join(" ");
}
