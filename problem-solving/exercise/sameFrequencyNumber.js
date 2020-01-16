// use frequency counter pattern
function sameFrequencyNumber(num1=0, num2=0) {
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	let string1,string2;

	if(num1 && num1 > 1) {
		string1 = num1.toString();
	}

	if(num2 && num2 > 1) {
		string2 = num2.toString();
	}

  if (string1.length && string1 === string2) {
    return false;
  }
  for (let val of string1) {
    frequencyCounter1[val]
      ? (frequencyCounter1[val] += 1)
      : (frequencyCounter1[val] = 1);
  }
  for (let val of string2) {
    frequencyCounter2[val]
      ? (frequencyCounter2[val] += 1)
      : (frequencyCounter2[val] = 1);
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequencyNumber(182,281)) // true
console.log(sameFrequencyNumber(34,14)) // false
console.log(sameFrequencyNumber(3589578,5879385)) // true
console.log(sameFrequencyNumber(22,222)) // false
//=================================================================