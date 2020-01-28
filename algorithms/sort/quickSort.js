// O(n log (n)) time complexity
// O(n) space complexity
function pivot(arr, start = 0, end = arr.length - 1) {
  const pivot = arr[start];
  let swapIndex = start;

  const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
  };

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  console.log(arr);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (right > left) {
    const pivotIdx = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, quickSort + 1, right);
  }

  return arr;
}

// console.log(pivot([4, 8, 5, 2, 1, 6, 3])); // 3
// console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3])); // 4
console.log(quickSort([4, 8, 5, 2, 1, 6, 3])); // 3
