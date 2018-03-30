/* Write a function to find the 2nd largest element in a binary search tree. */

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

function findLargestInBSTRecursively(node) {
    if (!node || (!node.left && !node.right)) {
        throw new Error("Tree must have at least two nodes");
    }

    if (node.right) {
        return findLargestInBSTRecursively(node.right);
    } else {
        return node;
    }
}

function find2ndLargestInBSTRecursively(rootNode) {
    if (!rootNode || (!rootNode.left && !rootNode.right)) {
        throw new Error("Tree must have at least 2 nodes");
    }

    // case: we're currently at largest, and largest has a left subtree,
    // so 2nd largest is largest in said subtree
    if (rootNode.left && !rootNode.right) {
        return findLargestInBSTRecursively(rootNode.left);
    }

    // case: we're at parent of largest, and largest has no left subtree,
    // so 2nd largest must be current node
    if (rootNode.right && !rootNode.right.left && !rootNode.right.right) {
        return rootNode;
    }

    // otherwise: step right
    return find2ndLargestInBSTRecursively(rootNode.right);
}

function findLargestInBSTIteratively(root) {
    let current = root;

    while (current) {
        if (!current.right) {
            return current;
        }
        current = current.right;
    }

    return null;
}

function find2ndLargestInBSTIteratively(root) {
    if (!rootNode || (!rootNode.left && !rootNode.right)) {
        throw new Error("Tree must have at least 2 nodes");
    }

    let current = root;
    while (current) {
        if (current.right && (!current.right.left && !current.right.right)) {
            return current;
        }

        if (current.left && !current.right) {
            return findLargestInBSTIteratively(current.length);
        }

        current = current.right;
    }

    return null;
}

const root = new BinaryTreeNode(1);
const r2 = root.insertLeft(0.5);
const r3 = root.insertRight(3);
// const r4 = r3.insertLeft(4) // returns false
const r2_5 = r3.insertLeft(2.5); // returns true
const r5 = r3.insertRight(5);
const r6 = r5.insertRight(6);
const r7 = r6.insertRight(7);
const r8 = r7.insertRight(8);
const r7_5 = r8.insertLeft(7.5);
const r7_75 = r7_5.insertLeft(7.75);
// const r35 = r7.insertRight(35);

/* But the above test case isn't a sorted binary search tree though....right? */

const result = find2ndLargestInBSTRecursively(root);
console.log("Result is:", result);
