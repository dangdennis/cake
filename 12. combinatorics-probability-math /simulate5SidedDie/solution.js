/**
 * You have a function rand7() that generates a random integer 
 * from 1 to 7. Use it to write a function rand5() that 
 * generates a random integer from 1 to 5.
 * 
 * Lesson: if ever unsure about probability and/or math: Just count
 */

function rand7() {
    return Math.floor(Math.random() * 7) + 1;
}

/**
 * Solution 1
 */
function rand5() {
    let result = 6;
    while(result > 5) {
        // Forces at least two rolls 
        result = rand7()
    }
    return result;
}

/*
rand7()   rand5()
1 	        2
2 	        3
3 	        4
4 	        5
5 	        1
6 	        2
7 	        3 
 */