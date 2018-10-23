function iqTest(numbers) {
  let odds = 0;
  let evens = 0;
  //change string to array of ints
  numbers = numbers.split(" ").map(function(item) {
    //count odds and evens
    if (parseInt(item, 10) % 2 == 0) evens++;
    else odds++;
    return parseInt(item, 10);
  });

  let i = 1;
  let j = 0;
  if (evens > odds) {
    numbers.map(function(item) {
      if (item % 2 != 0) j = i;
      i++;
    });
  } else {
    numbers.map(function(item) {
      if (item % 2 == 0) j = i;
      i++;
    });
  }
  return j;
}
