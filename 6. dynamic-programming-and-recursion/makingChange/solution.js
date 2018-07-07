// recursion

class Change {
    constructor() {
        this.memo = {};
    }

    changePossibilitiesTopDown(amountLeft, denominations, currentIndex = 0) {
        // Check our memo and short-circuit if we've already solved this one
        const memoKey = [amountLeft, currentIndex].join(", ");
        if (this.memo.hasOwnProperty(memoKey)) {
            console.log("grabbing memo [" + memoKey + "]");
            return this.memo[memoKey];
        }

        // Base cases:
        // We hit the amount spot on. yes!
        if (amountLeft === 0) return 1;

        // We overshot the amount left (used too many coins)
        if (amountLeft < 0) return 0;

        // We're out of denominations
        if (currentIndex === denominations.length) return 0;

        console.log(
            "checking ways to make " +
                amountLeft +
                " with [" +
                denominations.slice(currentIndex).join(", ") +
                "]",
        );

        // Choose a current coin
        const currentCoin = denominations[currentIndex];

        // See how many possibilities we can get
        // for each number of times to use currentCoin
        let numPossibilities = 0;
        while (amountLeft >= 0) {
            numPossibilities += this.changePossibilitiesTopDown(
                amountLeft,
                denominations,
                currentIndex + 1,
            );
            amountLeft -= currentCoin;
        }

        // Save the answer in our memo so we don't compute it again
        this.memo[memoKey] = numPossibilities;
        return numPossibilities;
    }
}


// Non recursion, bottoms up
function changePossibilitiesBottomUp(amount, denominations) {
    // intialize an array of zeros with indices up to amount
    var waysOfDoingNcents = [];
    for (var i = 0; i <= amount; i++) {
        waysOfDoingNcents[i] = 0;
    }
    waysOfDoingNcents[0] = 1;

    denominations.forEach(function(coin) {
        for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
            var higherAmountRemainder = higherAmount - coin;
            waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
        }
    });

    return waysOfDoingNcents[amount];
}

changePossibilitiesBottomUp(5, [1, 3, 5]);
