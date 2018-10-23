function isValidWalk(walk) {
  let distance = 0;
  let time = 0;
  walk.map(function(item) {
    if (item == "n" || item == "w") distance++;
    if (item == "s" || item == "e") distance--;
    time++;
  });

  if (!distance && time == 10) return true;
  else return false;
}
