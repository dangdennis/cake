/**
 * Write an efficient function that checks whether
 * any permutation of an input string is a palindrome.
 *
 * I even know interviewers who just want to hear you say "object",
 * and once they hear that they'll say, "Great, let's move on."
 */
function isAnyPermutationPalindrome(sentence) {
    var set = new Set();
    for (var i = 0; i < sentence.length; i++) {
        if (!set.has(sentence[i])) {
            set.add(sentence[i]);
        }
        else {
            set["delete"](sentence[i]);
        }
    }
    if (set.size <= 1)
        return true;
    return false;
}
console.log(isAnyPermutationPalindrome("civic"));
console.log(isAnyPermutationPalindrome("ivicc"));
console.log(isAnyPermutationPalindrome("civil"));
console.log(isAnyPermutationPalindrome("livci"));
console.log(isAnyPermutationPalindrome("densned"));
