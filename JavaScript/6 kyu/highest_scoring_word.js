function high(x) {
  let y = [];
  x = x.split(" ").map(function(word) {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      sum += word.charCodeAt(i) - 97;
    }
    y.push(sum);
    return word;
  });
  return x[y.indexOf(Math.max(...y))];
}
