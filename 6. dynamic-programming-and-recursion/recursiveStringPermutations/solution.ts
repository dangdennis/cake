/**
 * Write a recursive function for generating all permutations of an input string.
 * Return them as a set.
 *
 * Don't worry about time or space complexity—if we wanted efficiency
 * we'd write an iterative version. To start, assume every character in
 * the input string is unique. Your function can have loops—
 * it just needs to also be recursive.
 *
 * Lesson: first solve the problem "by hand", then translate to code
 */

function getPermutations(word: string): Set<string> {
    if (word.length <= 1) return new Set(word);

    const allCharsExceptlast = word.slice(0, -1);
    const lastChar = word[word.length - 1];

    const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptlast);

    const permutations = new Set();

    permutationsOfAllCharsExceptLast.forEach(permutation => {
        for (let i = 0; i <= allCharsExceptlast.length; i++) {
            const permutation =
                permutationsOfAllCharsExceptLast.slice(0, i) +
                +lastChar +
                permutationsOfAllCharsExceptLast.slice(i);
            permutations.add(permutation);
        }
    });

    return permutations;
}

console.log(getPermutations("cats"));
