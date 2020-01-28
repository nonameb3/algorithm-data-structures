function power(i, j) {
  if (j === 0) return 1;
  return i * power(i, j - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16

// power(2, 4)
// 2 * power(2, 3)
//   2 * power(2,2);
//     2 * power(2,1);
//       2 * power(2,0);
//          1
