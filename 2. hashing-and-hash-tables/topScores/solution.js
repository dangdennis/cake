/**
 * Write a function that takes:
 * an array of unsortedScores
 * the highestPossibleScore in the game
 * and returns a sorted array of scores in less than O(n lg n) time.
 *
 * Methods:
 * 1. Greedy (meh)
 * 2. Counting
 */

var unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

// sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [91, 89, 65, 53, 41, 37]

/**
 * Solution 1
 * @param {array} unsortedScores
 * @param {number} highestPossibleScore
 * Time / space
 * 0(n) / O(n)
 */

function sortScores(unsortedScores, highestPossibleScore) {
    const sortedScores = [];
    const counts = new Map();

    unsortedScores.forEach(item => {
        if (!counts.has(item)) {
            counts.set(item, 1);
        } else {
            counts.set(item, counts.get(item) + 1);
        }
    });

    let i = 0;

    while (i <= highestPossibleScore) {
        if (counts.has(i)) {
            const numOfScores = counts.get(i);
            for (let j = 0; j < numOfScores; j++) {
                sortedScores.push(i);
            }
        }

        i++;
    }

    return sortedScores;
}

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));

/**
 * Solution 2
 * @param {array} unorderedScores
 * @param {number} highestPossibleScore
 */
function sortScores(unorderedScores, highestPossibleScore) {
    // array of 0s at indices 0..highestPossibleScore
    var scoreCounts = [];
    for (var i = 0; i < highestPossibleScore + 1; i++) {
        scoreCounts.push(0);
    }

    // populate scoreCounts
    unorderedScores.forEach(function(score) {
        scoreCounts[score]++;
    });

    // populate the final sorted array
    var sortedScores = [];

    // for each item in scoreCounts
    for (var score = highestPossibleScore; score >= 0; score--) {
        var count = scoreCounts[score];

        // for the number of times the item occurs
        for (var time = 0; time < count; time++) {
            sortedScores.push(score);
        }
    }

    return sortedScores;
}
