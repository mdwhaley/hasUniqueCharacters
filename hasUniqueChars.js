// Write your code below
function hasUniqueCharacters(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(hasUniqueCharacters("fod"));
console.log(hasUniqueCharacters("food"));
