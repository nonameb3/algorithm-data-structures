// multiple pointers Pattern
// find UniqueValue
// O(n) time complexity
// O(1) space complexity
function UniqueValue(arr=[]) {
  let value = 0;
  let count = 0;
  for(let val of arr) {
    if(val !== value) {
      value = val;
      count++;
    }
  }
  return count;
}

console.log(UniqueValue([1,1,1,1,1,2])) // 2
console.log(UniqueValue([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(UniqueValue([])) // 0
console.log(UniqueValue([-2,-1,-1,0,1])) //4