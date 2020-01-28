function fib(input) {
  // find fibonacci as array
  const FibonacciNumber = num => {
    if (num === 1) return [0, 1];
    const fibArr = FibonacciNumber(num - 1);
    return fibArr.concat(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
  };
  const result = FibonacciNumber(input);
  return result[result.length - 1];
}

// shot code
// function fib(i){
//   if (i < 2) return i;
//   return fib(i-1) + fib(i-2);
// }

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465

// fib(10);
//   [55] + fib(9)
//     [34] + fib(8)
//       [21] + fib(7)
//         [13] + fib(6)
//           [8] + fib(5)
//             [5] + fib(4)
//               [3] + fib(3)
//                 [2] + fib(2)
//                   [1] + fib(1)
//                     [0,1]
