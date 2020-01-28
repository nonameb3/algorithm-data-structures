// frequency counter pattern
function areThereDuplicates(...arg) {
	let frequencyCounter1 = {};
	
  for (let val of arg) {
    frequencyCounter1[val]
      ? (frequencyCounter1[val] += 1)
      : (frequencyCounter1[val] = 1);
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] > 1) {
      return true;
    }
  }
  return false;
}

// online
function areThereDuplicatesOnline() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1,2,3)); // false
console.log(areThereDuplicates(1,2,2)); // true
console.log(areThereDuplicates('a','b','c','a')); // true
//=================================================================