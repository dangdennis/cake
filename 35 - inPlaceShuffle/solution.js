/**
 * Write a function for doing an in-place shuffle of an array.
 * The shuffle must be "uniform," meaning each item in the original
 * array must have the same probability of ending up in each spot in the final array.
 */

/**
 * Solution 1
 */

function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * ceiling - floor);
}

function shuffleInPlace(deck) {
    let i = 0;
    let temp = null;
    let rand1 = getRandom(0, 53);
    let rand2 = getRandom(0, 53);
    while (i < 52) {
        let temp = deck[rand1];
        deck[rand1] = deck[rand2];
        deck[rand2] = temp;
    }

    return deck;
}

// const deck =

/**
 * Naive solution
 * this does not give a uniform random distribution.
 */
function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function naiveShuffle(theArray) {
    // for each index in the array
    for (var firstIndex = 0; firstIndex < theArray.length; firstIndex++) {
        // grab a random other index
        var secondIndex = getRandom(0, theArray.length - 1);

        // and swap the values
        if (secondIndex !== firstIndex) {
            var temp = theArray[firstIndex];
            theArray[firstIndex] = theArray[secondIndex];
            theArray[secondIndex] = temp;
        }
    }
}

/**
 * Solution 3
 * We choose a random item to move to the first index, then
 * we choose a random other item to move to the second index, etc
 */

function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(theArray) {
    // if it's 1 or 0 items, just return
    if (theArray.length <= 1) return;

    // walk through from beginning to end
    for (
        var indexWeAreChoosingFor = 0;
        indexWeAreChoosingFor < theArray.length - 1;
        indexWeAreChoosingFor++
    ) {
        // choose a random not-yet-placed item to place there
        // (could also be the item currently in that spot)
        // must be an item AFTER the current item, because the stuff
        // before has all already been placed
        var randomChoiceIndex = getRandom(indexWeAreChoosingFor, theArray.length - 1);

        // place our random choice in the spot by swapping
        if (randomChoiceIndex !== indexWeAreChoosingFor) {
            var valueAtIndexWeChoseFor = theArray[indexWeAreChoosingFor];
            theArray[indexWeAreChoosingFor] = theArray[randomChoiceIndex];
            theArray[randomChoiceIndex] = valueAtIndexWeChoseFor;
        }
    }
}
