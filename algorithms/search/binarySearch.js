// O(log (n)) time complexity
// O(1) space complexity
function binarySearch(arr = [], value) {
  let start = 0;
  let end = arr.length - 1;
  let middleIndex = Math.floor((start + end) / 2);

  while (arr[middleIndex] !== value && start <= end) {
    if (value < arr[middleIndex]) {
      end = middleIndex - 1;
    } else {
      start = middleIndex + 1;
    }

    middleIndex = Math.floor((start + end) / 2);
  }
  return value === arr[middleIndex] ? middleIndex : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1

// binarySearch([1,2,3,4,5], 2);
// start at 0, end last , find middle
// if (2 < middle) cut rigth
// 2 === middle ? middle : loop
