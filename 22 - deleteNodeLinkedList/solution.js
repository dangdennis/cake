/* Delete a node from a singly-linked list, given only a 
 variable pointing to that node. */

function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode("A");
var b = new LinkedListNode("B");
var c = new LinkedListNode("C");

a.next = b;
b.next = c;

deleteNode(b);

function deleteNode(node) {
    if (!node) {
        throw new Error("No valid node");
    }

    const nextNode = node.next;

    if (nextNode) {
        node.value = nextNode.value;
        node.next = nextNode.next;
        return;
    }

    throw new Error(`Can't delete the last node`);
}

/* Downsides -- side effects:
 * 1. Any references to the input node now basically points to its next node
 * 2. If there are pointers to the input node's original next node, those pointers 
 * now point to a "dangling" node
 * 
 * But if we're assuming a linear singly linked list,
 * we can avoid these side effects.
 */
