// O(nk) time complexity (n is array lenght, k is number of digit)
// O(nk) space complexity
function getDigit(num, idx) {
  const digit = (Math.abs(num) / Math.pow(10, idx)) % 10;
  return Math.floor(digit);
}

function digitCount(num) {
  if (num === 0) return 1;
  const ditgit = Math.log10(Math.abs(num)) + 1;
  return Math.floor(ditgit);
}

function mostDigit(nums) {
  let maxNum = 0;
  for (let num of nums) {
    maxNum = Math.max(maxNum, digitCount(num));
  }
  return maxNum;
}

function redixSort(arr = []) {
  if (!arr.length) return arr;
  const mostdigit = mostDigit(arr);
  let bucket = [];
  for (let i = 0; i < mostdigit; i++) {
    bucket = Array.from({ length: 19 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);
      if (arr[j] >= 0) {
        bucket[9 + digit].push(arr[j]);
      } else {
        bucket[9 - digit].push(arr[j]);
      }
    }
    arr = [].concat(...bucket);
  }
  return arr;
}

// console.log(redixSort([1, 10, 50, 2, 14, 99, 100]));
// console.log(digitCount(-152233))
// console.log(getDigit(-152233,4));
console.log(redixSort([23, 12345, 0, -152233]));
