/*
Write a function for reversing a linked list. Do it in-place.
Your function will have one input: the head of the list.
Your function should return the new head of the list. 
*/

function reverseLinkedList(node) {
    if (!node) {
        throw new Error("Enter a valid node");
    }

    let current = node;
    let prev = null;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const a = new LinkedListNode("A");
const b = new LinkedListNode("B");
const c = new LinkedListNode("C");
const d = new LinkedListNode("D");
a.next = b;
b.next = c;
c.next = d;

const reversed = reverseLinkedList(a);
console.log(reversed);
console.log(reversed.next);
console.log(reversed.next.next);
console.log(reversed.next.next.next);
