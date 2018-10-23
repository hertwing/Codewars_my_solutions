var sum_pairs = function(ints, s) {
  let pair = [];
  let stop = false;
  for (let i = 0; i < ints.length && !stop; i++) {
    for (let j = 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        pair.push(ints[i], ints[j]);
        stop = true;
      }
    }
    ints = ints.filter(element => element != ints[i]);
    i = 0;
  }

  if (!pair.length) {
    return undefined;
  } else return pair;
};
