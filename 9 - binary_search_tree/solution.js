/* 
Write a function to check that a binary tree ↴ is a valid binary search tree. ↴
*/

function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

const root = new BinaryTreeNode(1);
const r2 = root.insertLeft(0.5);
const r3 = root.insertRight(3);
// const r4 = r3.insertLeft(4) // returns false
const r2_5 = r3.insertLeft(2.5); // returns true
const r5 = r3.insertRight(5);
const r6 = r5.insertRight(6);
const r7 = r6.insertRight(7);
const r35 = r7.insertRight(35);

// Solution 1: Recursive
function isBinarySearchTree(node, lowerBound, upperBound) {
    lowerBound = typeof lowerBound !== "undefined" ? lowerBound : -Infinity;
    upperBound = typeof upperBound !== "undefined" ? upperBound : Infinity;

    if (!node) return true;

    if (node.value >= upperBound || node.value <= lowerBound) {
        return false;
    }

    return (
        isBinarySearchTree(node.left, lowerBound, node.value) &&
        isBinarySearchTree(node.right, node.value, upperBound)
    );
}

// Solution 2 -- Iterative
function isBinarySearchTree(treeRoot) {
    // start at the root, with an arbitrarily low lower bound
    // and an arbitrarily high upper bound
    var nodeAndBoundsStack = [];
    nodeAndBoundsStack.push({
        node: treeRoot,
        lowerBound: -Infinity,
        upperBound: Infinity
    });

    // depth-first traversal
    while (nodeAndBoundsStack.length) {
        var nodeAndBounds = nodeAndBoundsStack.pop();
        var node = nodeAndBounds.node,
            lowerBound = nodeAndBounds.lowerBound,
            upperBound = nodeAndBounds.upperBound;

        // if this node is invalid, we return false right away
        if (node.value <= lowerBound || node.value >= upperBound) {
            return false;
        }

        if (node.left) {
            // this node must be less than the current node
            nodeAndBoundsStack.push({
                node: node.left,
                lowerBound: lowerBound,
                upperBound: node.value
            });
        }
        if (node.right) {
            // this node must be greater than the current node
            nodeAndBoundsStack.push({
                node: node.right,
                lowerBound: node.value,
                upperBound: upperBound
            });
        }
    }

    // if none of the nodes were invalid, return true
    // (at this point we have checked all nodes)
    return true;
}
