// Write a function for finding the index of the "rotation point"

var words = [
    "ptolemaic",
    "retrograde",
    "supplant",
    "undulate",
    "xenoepist",
    "asymptote", // <-- rotates here!
    "babka",
    "banoffee",
    "engender",
    "karpatka",
    "othellolagkage",
];

// solution 1 O(n)
// function findRotationPoint(words) {
//     if (words.length <= 2) {
//         throw new Error("Not enough words for a rotation point");
//     }

//     for (let i = 0; i < words.length; i++) {
//         if (words[i] > words[i + 1]) {
//             return i + 1;
//         }
//     }
// }

// solution 2 O(lg n)
function findRotationPoint(words) {
    if (words.length <= 2) {
        throw new Error("Not enough words for a rotation point");
    }

    let leftBound = 0;
    let rightBound = words.length - 1;

    while (leftBound < rightBound) {

        // use a random number. ex, grab the middle one
        let middleIndex = ~~((rightBound + leftBound) / 2);
        let currentWord = words[middleIndex];

        // we want to find the point where the word on the right is 'less than'
        // the word on the left. aka the word on the left is 'greater than' the
        // word on the right
        if (currentWord < words[leftBound]) {
            // if the middle word is before the leftmost word alphabetically,
            // the rotation point is to the left
            rightBound = middleIndex;
        } else {
            // the opposite, if the middle word is after the leftmost word alphabetically,
            // then that means rotation is to the right
            // we want to get 
            leftBound = middleIndex;
        }

        // once the bounds are right next to each other, the rotation point
        // is the index of the word on the right side
        if (leftBound + 1 == rightBound) {
            return rightBound;
        }
    }
}
