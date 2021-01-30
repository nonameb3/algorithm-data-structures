// O(n) time complexity
// O(1) space complexity

function minimumBribes(q = []) {
  let swap = 0;
  let i = 0;

  while (i < q.length) {
    // check swap to more then 2
    if (q[i] - 1 > i + 2) return "Too chaotic";

    // swap array
    if (q[i] < q[i - 1]) {
      const tem = q[i];
      q[i] = q[i - 1];
      q[i - 1] = tem;
      swap++;
      i--;
    } else {
      i++;
    }
  }
  return swap;
}

// Rule Two points to bear in mind while solving this problem:

// - A person can bribe the one who is sitting just in front of him. The opposite is not possible.
// - A person can bribe atmost 2 different persons.

console(minimumBribes([2, 1, 5, 3, 4])); // 3
console(minimumBribes([2, 5, 1, 3, 4])); // Too chaotic
console(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])); // 7
console(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])); // 4
