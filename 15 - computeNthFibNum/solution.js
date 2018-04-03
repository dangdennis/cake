/*
 * Write a function fib() that takes an integer n
 * and returns the nth Fibonacci number
 * 
 * fib(0);  // => 0
 * fib(1);  // => 1
 * fib(2);  // => 1
 * fib(3);  // => 2
 * fib(4);  // => 3
 */

// Solution 1 - Recursive and memoization

// class Fib {
//     constructor() {
//         this.memo = {};
//     }

//     findFib(num) {
//         if (num == 0 || num == 1) {
//             return num;
//         }

//         if (this.memo.hasOwnProperty(num)) {
//             return this.memo[num];
//         }

//         const result = this.findFib(num - 1) + this.findFib(num - 2);

//         this.memo[num] = result;

//         return result;
//     }
// }

// const fib = new Fib()
// fib.findFib(5)

function fib(num) {
    if (num < 0) {
        throw new Error(`Can't have negative fibs`);
    }
    if (num == 0 || num == 1) {
        return num;
    }

    let prevPrev = 0;
    let prev = 1;
    let current = 0;

    for (let i = 0; i < num; i++) {
        current = prevPrev + prev;
        prevPrev = prev;
        prev = current;
    }

    return current;
}

fib(5);
