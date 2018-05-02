/*
I have an array of n + 1n+1 numbers. 
Every number in the range 1..n1..n appears once except 
for one number that appears twice.

Write a function for finding the number that appears twice

*/

/**
 * Wthell math: triangular series
 * Each number in a triangular series has a pairing that will equal n+1
 * Subtract the perfect sum and the imperfect sum will yield that non-paired digit
 */

function findDouble(digits) {
    const n1 = digits[digits.length - 1];
    const sumPerfectTriSeries = (n1 ** 2 + n1) / 2;
    const sumImperfectTriSeries = digits.reduce((sum, next) => sum + next, 0);
    console.log(sumImperfectTriSeries, sumPerfectTriSeries);
    return sumPerfectTriSeries - sumImperfectTriSeries;
}

console.log(findDouble([1, 2, 3, 4, 5, 6, 8]));
