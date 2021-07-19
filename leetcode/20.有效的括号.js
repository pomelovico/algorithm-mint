const map = {
  "(": ")",
  ")": "(",
  "[": "]",
  "]": "[",
  "{": "}",
  "}": "{",
};
var enter = ["(", "{", "["];

function isValidBrackets(str) {
  const arr = str.split("");
  const stack = [];

  stack.push(arr.shift());
  let flag = true;

  do {
    var next = arr.shift();
    // 左括号入栈
    if (enter.includes(next)) {
      stack.push(next);
      continue;
    }
    var top = stack[stack.length - 1];
    if (map[top] === next) {
      stack.pop();
    } else {
      flag = false;
      break;
    }
  } while (arr.length);
  return flag && stack.length === 0 && arr.length === 0;
}

console.log(isValidBrackets("()[]{}"));
