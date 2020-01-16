// Mutiple Pointers Pattren
// O(n) time complexity
// O(1) space complexity
function isSubsequence(str1, str2) {
  let directIndex = 0;

  for (let index in str2) {
    if (str1[directIndex] === str2[index]) {
      directIndex++;
    }
    if (!str1[directIndex]) {
      return true;
    }
  }

  return false;
}

console.log(isSubsequence("hello", "hello wrold")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
