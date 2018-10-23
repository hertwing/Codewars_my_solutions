Math.round = function(number) {
  if (number % 1 >= 0.5 && number % 1 < 1) number++;
  number -= number % 1;
  return number;
};

Math.ceil = function(number) {
  if (number % 1 != 0) {
    number -= number % 1;
    number += 1;
  }
  return number;
};

Math.floor = function(number) {
  number -= number % 1;
  return number;
};
