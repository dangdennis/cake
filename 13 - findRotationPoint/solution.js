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

function findRotationPoint(words) {
    if (words.length <= 2) {
        throw new Error("Not enough words for a rotation point");
    }
    
}
