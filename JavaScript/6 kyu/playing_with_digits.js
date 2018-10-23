function digPow(n, p) {
  let number_to_string = n.toString();
  let digits = [];
  for (let i = 0; i < number_to_string.length; i += 1) {
    let digit = +number_to_string.charAt(i);
    let after_power = digit;
    for (let j = 1; j < p; j++) {
      after_power = digit * after_power;
    }
    p++;
    digits.push(after_power);
  }
  let sum = 0;
  for (let i = 0; i < digits.length; sum += digits[i++]);
  if (sum % n === 0) {
    return sum / n;
  } else {
    return -1;
  }
}
