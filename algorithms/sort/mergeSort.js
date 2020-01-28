// O(n log (n)) time complexity
// O(n) space complexity
function merge(arr1, arr2) {
  const checkLength = (arr, index) => arr.length > index;
  let result = [];
  let currentIndexA = 0;
  let currentIndexB = 0;

  while (checkLength(arr1, currentIndexA) && checkLength(arr2, currentIndexB)) {
    const arr1Value = arr1[currentIndexA];
    const arr2Value = arr2[currentIndexB];
    if (arr1Value < arr2Value) {
      result.push(arr1Value);
      currentIndexA++;
    } else {
      result.push(arr2Value);
      currentIndexB++;
    }
  }

  if (checkLength(arr2, currentIndexB))
    result = result.concat(arr2.splice(currentIndexB));
  if (checkLength(arr1, currentIndexA))
    result = result.concat(arr1.splice(currentIndexA));

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let arrayFirstHalf = mergeSort(arr.slice(0, mid));
  let arraySecondHalf = mergeSort(arr.slice(mid));
  return merge(arrayFirstHalf, arraySecondHalf);
}

// console.log(merge([1,10,50], [2,14,99,100])); // [1,2,10,14,50,99,100]
// console.log(merge([2,14,99,100], [1,10,50])); // [1,2,10,14,50,99,100]
// console.log(merge([100], [1,10,50])); // [1,10,50,100]

console.log(mergeSort([1, 10, 50, 2, 14, 99, 100])); // [1,2,10,14,50,99,100]
