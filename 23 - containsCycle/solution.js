/* 
You have a singly-linked list ↴ and 
want to check if it contains a cycle.
*/

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

// Time / Space
// O(n) / O(1)
function containsCycle(node) {
    if (!node) {
        throw new Error("Please enter a valid node");
    }

    let slow = node;
    let fast = node;

    while (fast && fast.next) {
        if (slow == fast) {
            return true;
        }
        let slow = slow.next;
        let fast = fast.next.next;
    }

    return false;
}
