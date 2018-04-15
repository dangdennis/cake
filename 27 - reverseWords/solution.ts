/*
Write a function reverseWords() that takes a message as an array of characters 
and reverses the order of the words in-place.
*/

// Lesson:
// Solve a simpler version of the problem (in this case, reversing the characters 
// instead of the words), and see if that gets us closer to a solution for the original problem. 

function reverseWords(message: string[]): string[] {
    if(!message.length) throw new Error('Please input a valid array of words')

    let lastWordPointer = 0;
    for(let letterPosition = message.length; lastWordPointer != 0; letterPosition++) {
        if(letterPosition[letterPosition-1] == ' ') {
            lastWordPointer = letterPosition;
        }
    }

    for(let i = 0; i < message.length; i++) {
        if(message[i])
    }

    return []
}

function reverseStringInPlace(str: string): string {
    if (str.length < 2) {
        return str;
    }

    let letterArr = str.split("");

    for (let i = 0, j = letterArr.length; i < j; i++, j--) {
        if (i + 1 == j) {
            return letterArr
        }

        const temp = letterArr[i];
        letterArr[i] = letterArr[j];
        letterArr[j] = temp;
    }

    return;
}


const message = ["c", "a", "k", "e", " ", "p", "o", "u", "n", "d", " ", "s", "t", "e", "a", "l"];

reverseWords(message);

console.log(message.join(""))
