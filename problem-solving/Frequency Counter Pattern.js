// Frequency Counter Pattern
// Anagram
// O(n)
function same(string1, string2){
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  if(string1.length &&(string1 === string2) ) {
    return false;
  }
  for(let val of string1){
      frequencyCounter1[val] ? frequencyCounter1[val] += 1 : frequencyCounter1[val] = 1 
     }
  for(let val of string2){
      frequencyCounter2[val] ? frequencyCounter2[val] += 1 : frequencyCounter2[val] = 1 
  }
  for(let key in frequencyCounter1){
      if(!(key in frequencyCounter2)){
          return false
      }
      if(frequencyCounter2[key] !== frequencyCounter1[key]){
          return false
      }
  }
  return true
}

console.log(same('', '')) // true
console.log(same('aaz', 'zza')) // false
console.log(same('anagram', 'nagaram')) // true
console.log(same('rat', 'car')) // false
console.log(same('awesome', 'awesom')) // false
console.log(same('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(same('qwerty', 'qeywrt')) // true
console.log(same('texttwisttime', 'timetwisttext')) // true
