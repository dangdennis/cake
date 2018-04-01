/*
 * Write a function that takes an integer flightLength 
 * (in minutes) and an array of integers movieLengths 
 * (in minutes) and returns a boolean indicating whether 
 * there are two numbers in movieLengths whose 
 * sum equals flightLength. 
 */

/*
 * When building your function:
 * Assume your users will watch exactly two movies
 * Don't make your users watch the same movie twice
 * Optimize for runtime over memory
 */

/* Time / space
  * O(n) / O(n)
  * Lesson: check to see if you can implement hash-based data structures 
  * to free up time
  */

// Solution one with javascript Map, returns indexes of movies
const flightLength = 80;
const movieLengths = [20, 30, 10, 0, 40];

function watchTwoMoviesOnly(flightLength, movieLengths) {
    if (!flightLength || flightLength <= 0) {
        throw new Error("Positive flight length required");
    }

    if (movieLengths <= 1) {
        throw new Error("Must have at least two movie lengths");
    }

    const flightMap = new Map();

    for (let i = 0; i < movieLengths.length; i++) {
        const diff = flightLength - movieLengths[i];

        if (flightMap.has(diff)) {
            return [i, flightMap.get(diff)];
        } else {
            flightMap.set(movieLengths[i], i);
        }
    }

    return null;
}

// watchTwoMoviesOnly(flightLength, movieLengths);

// solution 2 with javascript Set, returns boolean
function canTwoMoviesFillFlight(movieLengths, flightLength) {
    // movie lengths we've seen so far
    var movieLengthsSeen = new Set();

    for (var i = 0; i < movieLengths.length; i++) {
        var firstMovieLength = movieLengths[i];

        var matchingSecondMovieLength = flightLength - firstMovieLength;
        if (movieLengthsSeen.has(matchingSecondMovieLength)) {
            return true;
        }

        movieLengthsSeen.add(firstMovieLength);
    }

    // we never found a match, so return false
    return false;
}
