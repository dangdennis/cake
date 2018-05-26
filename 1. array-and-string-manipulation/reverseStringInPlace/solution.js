/*
Write a function that takes an array of
characters and reverses the letters in-place.
*/
function reverseStringInPlace(str) {
    if (str.length < 2) {
        return str;
    }
    var letterArr = str.split("");
    for (var i = 0, j = letterArr.length; i < j; i++, j--) {
        if (i + 1 == j) {
            return letterArr.join("");
        }
        var temp = letterArr[i];
        letterArr[i] = letterArr[j];
        letterArr[j] = temp;
    }
    return letterArr.join("");
}
console.log(reverseStringInPlace('abcdefg'));
