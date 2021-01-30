function maximumToys(prices = [], k) {
  const arr = prices.sort((i, j) => i - j);
  let count = 0;
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (total < k) {
      total += arr[i];
      count++;
    }

    if (total > k) {
      total -= arr[i];
      count--;
      break;
    }
  }
  return count;
}

// find how many price can buy max toys

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)); // 4
console.log(maximumToys([1, 2, 3, 4], 7)); // 3
