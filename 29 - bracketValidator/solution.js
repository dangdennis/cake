/**
 * Write an efficient function that tells us whether or
 * not an input string's openers and closers are properly nested.
 *
 * When choosing a data structure, we should start by deciding 
 * on the properties we want.
 * 
 * Two common uses for stacks:
 * 1. parsing
 * 2. tree or graph traversal
 */

const patterns = {
    "(": ")",
    "{": "}",
    "[": "]",
};

function bracketValidator(string) {
    const stack = [];

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (patterns.hasOwnProperty(char)) {
            stack.push(char);
        } else if (char == patterns[stack[stack.length - 1]]) {
            if (!stack.length) {
                return false;
            } else {
                stack.pop();
            }
        }
    }

    return stack.length == 0;
}

console.log(bracketValidator("{ [ ] ( ) }"));
