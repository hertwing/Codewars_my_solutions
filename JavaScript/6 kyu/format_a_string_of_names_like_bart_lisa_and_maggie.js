function list(names) {
  let len = names.length;
  let names_string = "";
  if (len === 1) {
    names_string = names[0].name;
  } else if (len > 1) {
    for (let i = 0; i < len - 2; i++) {
      names_string += names[i].name + ", ";
    }
    names_string += names[len - 2].name;
    names_string += " & " + names[len - 1].name;
  }
  return names_string;
}
