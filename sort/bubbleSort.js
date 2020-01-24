// O(n^2) time complexity
// O(1) space complexity
function bubbleSort(arr) {
  let i = 0;
  let j = 1;

  for (let index = 0; index < arr.length; index++) {
    while (i < arr.length && j <= arr.length) {
      if (arr[j] < arr[i]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      i++;
      j++;
    }
    i = 0;
    j = 1;
  }
  return arr;
}

console.log(bubbleSort([1, 10, 50, 2, 14, 99, 100])); // [1,2,10,14,50,99,100]
