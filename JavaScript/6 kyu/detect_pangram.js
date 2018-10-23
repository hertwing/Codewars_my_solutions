function isPangram(string) {
  let char = 65;
  let chars = 0;
  string = string.toUpperCase();
  let s_len = string.length;
  while (char != 92) {
    if (string.indexOf(String.fromCharCode(char)) != -1) chars++;
    char++;
  }
  if (chars == 26) return true;
  else return false;
}
