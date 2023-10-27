function isPalindrome(word) {
  // Convert word to lowercase
  word = word.toLowerCase();
  
  // Base cases:
  if (word.length <= 1) {
    return true;
  }
  
  if (word[0] !== word[word.length - 1]) {
    return false;
  }
  
  // Recursive case:
  return isPalindrome(word.slice(1, word.length - 1));
}