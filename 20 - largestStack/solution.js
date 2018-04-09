/* You want to be able to access the largest element in a stack. */

/* Lessons:
 * Sometimes the first step = decide what to optimize for
 */

class Stack {
    items = [];

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (!this.items.length) {
            return null;
        }

        return this.item.pop();
    }

    peek() {
        if (!this.items.length) {
            return null;
        }

        return this.items[this.items.length - 1];
    }
}

// My solution
class maxStack extends Stack {
    constructor() {
        super();
        this.max = 0;
        this.maxHistory = [];
    }

    push(item) {
        this.items.push(item);

        if (!this.maxHistory.length) {
            this.max = item;
            this.maxHistory.push(item);
            return;
        }

        // Doesn't account for the oldMax yet
        if (item > this.max) {
            console.log("greater than max");
            this.maxHistory.push(item);
            this.max = item;
        }
    }

    getMax() {
        const max = this.maxHistory.pop();
        this.max = this.maxHistory[this.maxHistory.length - 1];
        return max;
    }
}

const s = new maxStack();

s.push(1);
s.push(-5);
s.push(10);
s.push(7);
console.log(s.items, s.max);
console.log(s.maxHistory);
s.getMax();
console.log(s.maxHistory);

// Solution 2
// Still the same problem if you add a number less than the max but greater than the old max
class maxStackTwo {
    constructor() {
        this.stack = new Stack();
        this.maxStack = new Stack();
    }

    push(item) {
        this.stack.push(item);
        if (!this.maxStack.peek() || item >= this.maxStack.peek()) {
            this.maxStack.push(item);
        }
    }

    pop() {
        const popped = this.stack.pop()
        if(popped == this.maxStack.peek()) {
            this.maxStack.pop()
        }

        return popped;
    }

    getMax() {
        return this.maxStack.peek()
    }
}

const s2 = new maxStackTwo()
s2.push(1);
s2.push(-5);
s2.push(7);
s2.push(10);
console.log(s2.stack.items, s2.maxStack);
console.log(s2.maxStack);
s2.getMax();
console.log(s2.maxStack);
