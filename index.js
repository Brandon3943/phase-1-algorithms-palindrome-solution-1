function isPalindrome(word) {
  let reversed = word.split("").reverse().join("");
  console.log(word);
  console.log(reversed);

  if(word === reversed) {
    return true;
  } else{
    return false;
  }
}

isPalindrome('hannah')

/* 
  Add your pseudocode here
  take the argument of isPalindrome, uses the orginal word. For the reverse is takes orginal word, turns it to an array,
  reverses the array, and finally turns the array back into a string.
*/

/*
  Add written explanation of your solution here
  compares word and the reversed word. and if each letter has the same index returns true, and if not returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
