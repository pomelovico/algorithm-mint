/**
 * @param {number} num
 * @return {string}
 */
const map = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};

const repeat = (time, char) => {
  return char.repeat(time);
};

const bitToRoman = (n, bit) => {
  const bits = Math.pow(10, bit - 1);
  const h = map[5 * bits];
  const l = map[1 * bits];
  if (n < 4) {
    return repeat(n, l);
  } else if (n === 4) {
    return `${l}${h}`;
  } else if (n < 9) {
    return `${h}${repeat(n % 5, l)}`;
  } else {
    return `${l}${map[1 * Math.pow(10, bit)]}`;
  }
};

var intToRoman = function (num) {
  let str = "";
  let bit = 1;
  while (num) {
    str = bitToRoman(num % 10, bit) + str;
    num = Math.floor(num / 10);
    bit++;
  }
  return str;
};

console.log(intToRoman(1994));
