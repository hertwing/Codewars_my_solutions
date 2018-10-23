function generateHashtag(str) {
	let hlpr = str.replace(/\s+/g, "");
	if (!hlpr.length) return false;
	var res = str.split(" ");
	res = res.map(word => word.slice(0, 1).toUpperCase() + word.slice(1));
	res.unshift("#");
	res = res.join("");
	if (res.length > 140) return false;
	return res;
}
