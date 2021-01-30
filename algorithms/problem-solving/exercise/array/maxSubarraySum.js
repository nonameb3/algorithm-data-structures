// Slide Window Pattren
// O(n) time complexity
// O(1) space complexity
function maxSubarraySum(arr = [], num) {
  if (num > arr.length) return null;

  let max = 0;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (i === num - 1) {
      max = currentSum;
    }
    if (i >= num) {
      currentSum -= arr[i - num];
      max = Math.max(max, currentSum);
    }
  }
  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([-2, 3], 3)); // null
