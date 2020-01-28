function recursiveRange(num){
   return num === 0 ? 0 : num + recursiveRange(--num);
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55

// recursiveRange(6);
//   6 + recursiveRange(5);
//     5 + recursiveRange(4);
//       4 + recursiveRange(3);
//         3 + recursiveRange(2);
//           2 + recursiveRange(1);
//             1 + recursiveRange(0);
//               0