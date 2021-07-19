var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let res = "";
  let arr = s.split("");
  let maxStep = (numRows - 1) * 2;
  for (let i = 0; i < numRows; i++) {
    let p = i,
      toggleStep = maxStep - i * 2;

    while (arr[p]) {
      if (toggleStep !== 0) {
        res += arr[p];
      }

      p += toggleStep;
      toggleStep = maxStep - toggleStep;
    }
  }

  return res;
};

console.log(convert("A", 1));
