/**
 * 滑动窗口中的最大值
 * 双端队列
 */
const arr = [3, 6, 43, 1, 9, 10, 3, 13];
const k = 3; // 窗口大小
let max = [];
let dQueue = [];
// for (let i = 0; i < arr.length; i += 1) {
//   while( dQueue.length && arr[dQueue[dQueue.length - 1]] < arr[i] ){
//     dQueue.pop()
//   }
//   dQueue.push(i);

// }
