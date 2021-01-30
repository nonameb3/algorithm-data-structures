// O(n^2) time complexity
// O(1) space complexity
function bubbleSort(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        const temp = a[j + 1];
        a[j + 1] = a[j];
        a[j] = temp;
        swap++;
      }
    }
  }
  return a;
}

console.log(bubbleSort([1, 10, 50, 2, 14, 99, 100])); // [1,2,10,14,50,99,100]
