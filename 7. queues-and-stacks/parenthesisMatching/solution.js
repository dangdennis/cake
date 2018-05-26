/**
 * Write a function that, given a sentence like the one above,
 * along with the position of an opening parenthesis,
 * finds the corresponding closing parenthesis.
 * 
 * The trick to many "parsing" questions like this is using a stack
 */

const testString =
    "Sometimes (when I nest them (my parentheticals) too " +
    "much (like this (and this))) they get confusing.";

function findMatchingParenthesis(string, initialParensPosition = 0) {
    if (!string) {
        throw new Error('Please input a valid string with at least one "("');
    }

    let openParensCount = 0;

    for (let position = initialParensPosition + 1; position < string.length; position++) {
        let char = string[position];

        if (char === "(") {
            openParensCount++;
        } else if (char === ")") {
            if (openParensCount === 0) {
                return position;
            } else {
                openParensCount--;
            }
        }
    }

    throw new Error("No closing parenthesis!");
}

console.log(findMatchingParenthesis(testString, 10));
