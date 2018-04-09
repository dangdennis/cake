/* Implement a queue with two stacks */

class Queue {
    constructor() {
        this.stackOne = [];
        this.stackTwo = [];
    }

    enqueue(data) {
        this.stackOne.push(data);
    }

    dequeue() {
        if (this.stackTwo.length == 0) {
            while (this.stackOne.length > 0) {
                this.stackTwo.push(this.stackOne.pop());
            }

            if (this.stackTwo.length == 0) {
                throw new Error("Error: Nothing to return still.");
            }
        }

        return this.stackTwo.pop();
    }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.stackOne);
console.log(q.stackTwo);
console.log(q.dequeue());
console.log(q.stackOne, q.stackTwo);
q.enqueue(4);
console.log(q.stackOne, q.stackTwo);