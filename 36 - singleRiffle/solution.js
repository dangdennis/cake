/**
 * write a function to tell us if a full deck
 * of cards shuffledDeck is a single riffle of
 * two other halves half1 and half2.
 */

const shuffledDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const half1 = [1, 3, 5, 7, 9, 11];
const half2 = [2, 4, 6, 8, 10, 12];

/**
 * Solution 1
 * @param {Number[]} half1
 * @param {Number[]} half2
 * @param {Number[]} shuffledDeck
 */
function isSingleRiffle(half1, half2, shuffledDeck) {
    // A set records the cards in the deck

    let half1Index = 0;
    let half2Index = 0;
    let shuffledDeckIndex = 0;

    while (shuffledDeckIndex < shuffledDeck.length) {
        if (shuffledDeck[shuffledDeckIndex] === half1[half1Index]) {
            half1Index++;
            shuffledDeckIndex++;
        } else if (shuffledDeck[shuffledDeckIndex] === half2[half2Index]) {
            half2Index++;
            shuffledDeckIndex++;
        } else {
            return false;
        }
    }

    if (half1Index === half1.length && half2Index === half2.length) {
        return true;
    }
}

console.log(isSingleRiffle(half1, half2, shuffledDeck));

/**
 * Solution 2
 * @param {Number[]} half1
 * @param {Number[]} half2
 * @param {Number[]} shuffledDeck
 */
function isSingleRiffle(half1, half2, shuffledDeck) {
    var half1Index = 0;
    var half2Index = 0;
    var half1MaxIndex = half1.length - 1;
    var half2MaxIndex = half2.length - 1;

    for (var i = 0; i < shuffledDeck.length; i++) {
        var card = shuffledDeck[i];

        // if we still have cards in half1
        // and the "top" card in half1 is the same
        // as the top card in shuffledDeck
        if (half1Index <= half1MaxIndex && card === half1[half1Index]) {
            half1Index++;

            // if we still have cards in half2
            // and the "top" card in half2 is the same
            // as the top card in shuffledDeck
        } else if (half2Index <= half2MaxIndex && card === half2[half2Index]) {
            half2Index++;

            // if the top card in shuffledDeck doesn't match the top
            // card in half1 or half2, this isn't a single riffle.
        } else {
            return false;
        }
    }

    // all cards in shuffledDeck have been "accounted for"
    // so this is a single riffle!
    return true;
}
