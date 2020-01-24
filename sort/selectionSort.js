// O(n^2) time complexity
// O(1) space complexity
function selectionSort(arr) {
  let lowerIndex;
  let hasNewLow = false;
  for (let i = 0; i < arr.length; i++) {
    lowerIndex = i;
    hasNewLow = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowerIndex]) {
        lowerIndex = [j];
        hasNewLow = true;
      }
    }
    if (hasNewLow) {
      const temp = arr[i];
      arr[i] = arr[lowerIndex];
      arr[lowerIndex] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([1, 10, 50, 2, 14, 99, 100])); // [1,2,10,14,50,99,100]
