/**
 * 括号匹配生成，回溯法
 * @param {*} number
 */
function getBrackets(number) {
  var results = [];
  backtrack(results, number, number, "");
  return results;
}

function backtrack(results, left, right, path) {
  if (left === 0 && right === 0) {
    results.push(path);
    return;
  }
  // 向下探索方向[1]
  if (left > 0) {
    // 还有左括号，加一个左括号
    backtrack(results, left - 1, right, path + "(");
  }
  // 向下探索方向[2]
  if (left < right) {
    // 剩余右括号比左括号多，则可以加一个右括号
    backtrack(results, left, right - 1, path + ")");
  }
}
