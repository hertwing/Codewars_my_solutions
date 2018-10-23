function validate(password) {
	console.log(password);
	return /^(?=.*[A-Z]){1,}(?=.*[a-z]{1,})(?=.*\d){1,}[A-Za-z\d]{6,}$/.test(
		password
	);
}
