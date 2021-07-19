// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {boolean}
//  */
// // var isMatch = function (s, p) {
// //   const arr = s.split("");
// //   const regArr = p.split("");
// //   let currentMatchChar = regArr.shift();
// //   let preLetter;
// //   for (let i = 0; i < arr.length; i++) {
// //     const c = arr[i];
// //     if (currentMatchChar === ".") {
// //       continue;
// //     } else if (currentMatchChar === "*") {
// //       if (preLetter !== undefined && preLetter !== c) {
// //         return false;
// //       }
// //     } else if (currentMatchChar === c) {
// //       // 匹配上字符，推进一位
// //       currentMatchChar = regArr.shift();
// //       preLetter = c;
// //     } else if (regArr[0] === "*") {
// //       i--;
// //       currentMatchChar = regArr.shift();
// //     } else {
// //       // 匹配失败
// //       return false;
// //     }
// //   }
// //   return true;
// // };

// var isMatch = function (s, p) {
//   const arr = s.split("");
//   const regArr = p.split("");
//   // let currentMatchChar = regArr.shift();
//   let preLetter;
//   for (let i = 0; i < regArr.length; i++) {
//     const regChar = regArr[i];
//     if (regChar === ".") {
//       preLetter = arr.shift();
//     }
//   }
//   return true;
// };

// console.log(isMatch("mississippi", "mis*is*ip*."));
