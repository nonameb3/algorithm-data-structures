function productOfArray(arr=[]) {
  if(!arr.length) return 1;
  return arr[0] * productOfArray(arr.splice(1));
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60

// productOfArray([1,2,3,10]);
//   1 * productOfArray([2,3,10]);
//     2 * productOfArray([3,10]);
//       3 * productOfArray([10]);
//         10 * productOfArray([]);
//           1