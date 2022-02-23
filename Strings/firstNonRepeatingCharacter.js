
/*
 Write a function that takes in a string of lowercase letters and returns the index of the string's first non-repeating character.
*/

// O(n) time && O(1) space
const firstNonRepeatingCharacter = str => {
  const hash = {};
  for (letter of str) {
    hash[letter] = ++hash[letter] || 1
  }

  for (letter of str) {
    if (hash[letter] === 1) return letter
  }
  return -1
}
