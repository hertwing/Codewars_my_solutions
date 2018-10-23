function mirror(text) {
  text = text.split(" ").map(word =>
    word
      .split("")
      .reverse()
      .join("")
  );
  let longest = text.reduce(function(a, b) {
    return a.length > b.length ? a : b;
  });
  text = text.map(word => {
    while (word.length < longest.length) {
      word += " ";
    }
    return word;
  });
  let stars = "";
  for (let i = 0; i < longest.length + 3; i++) {
    stars += "*";
  }
  text = text.reduce((r, a) => r.concat(a, " *\n* "), [" *\n* "]);
  text.unshift(stars + "*\n* ");
  text.push(" *\n*" + stars);
  text.splice(1, 1);
  text.splice(text.length - 2, 1);
  text = text.join("");
  return text;
}
