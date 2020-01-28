function factorial(i) {
  if( i <= 1) return 1;
  return i * factorial(i-1);
};

console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24 -> 4*3*2*1
console.log(factorial(7)) // 5040

// factorial(4);
//   4 * factorial(4-1);
//     3 * factorial(3-1);
//       2 * factorial(2-1);
//         1 * factorial(1-1);
//           1