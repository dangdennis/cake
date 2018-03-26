/*
Write a function to see if a binary tree ↴ is "superbalanced"
A tree is "superbalanced" if the difference 
between the depths of any two leaf nodes ↴ 
*/

/*
Write a function to see if a binary tree ↴ is "superbalanced"
A tree is "superbalanced" if the difference 
between the depths of any two leaf nodes ↴ 
*/

/*
Write a function to see if a binary tree ↴ is "superbalanced"
A tree is "superbalanced" if the difference 
between the depths of any two leaf nodes ↴ 
*/

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = value;
        return this.left;
    }

    insertRight(value) {
        this.right = value;
        return this.right;
    }
}

/*
 * Solution 1
 * Time / space
 * O(1) / O(1)
 */
function findSuperBalanced(node) {
    let root = node;

    if (!root) {
        return true;
    }

    if (!root.left && !root.right) {
        return true;
    }

    let depthMap = {};
    let level = 0;

    function traverseDFSWithLevel(node, level) {
        // If at a leaf
        if (!node.left && !node.right) {
            // Add a new array for the level
            if (!depthMap[level]) {
                depthMap[level] = [node];
                return;
            }

            // Just add the leaf to its corresponding level in the map
            depthMap[level].push(node);
            return;
        }

        if (node.left) {
            console.log(node.value);
            traverseDFSWithLevel(node.left, level + 1);
        }

        if (node.right) {
            console.log(node.value);
            traverseDFSWithLevel(node.right, level + 1);
        }
    }

    traverseDFSWithLevel(root, 0);

    // Check depth range -- fail if more than 1 apart
    const depthMapKeys = Object.keys(depthMap);
    if (Math.abs(depthMapKeys[0] - depthMapKeys[depthMapKeys.length - 1]) > 1) {
        return false;
    }

    return true;
}

const root = new BinaryTreeNode(1);
const r2 = new BinaryTreeNode(2);
const r3 = new BinaryTreeNode(3);
const r4 = new BinaryTreeNode(4);
const r5 = new BinaryTreeNode(5);
const r6 = new BinaryTreeNode(6);
const r7 = new BinaryTreeNode(7);

const r2 = root.insertLeft(2);
const r3 = root.insertRight(3);
const r4 = r2.insertLeft(4);
const r5 = r3.insertLeft(5);
const r6 = r4.insertLeft(6);
// const r7 = r4.insertRight(7); // TRUE
const r7 = r6.insertLeft(7); // FALSE

// console.log(findSuperBalanced(root));

/*
 * Solution 2
 * Time / space
 * O(1) / O(1)
 */
function isBalanced(treeRoot) {
    // a tree with no nodes is superbalanced, since there are no leaves!
    if (!treeRoot) {
        return true;
    }

    var depths = []; // we short-circuit as soon as we find more than 2

    // nodes will store pairs of a node and the node's depth
    var nodes = [];
    nodes.push([treeRoot, 0]);

    while (nodes.length) {
        // pop a node and its depth from the top of our stack
        var nodePair = nodes.pop();
        var node = nodePair[0],
            depth = nodePair[1];

        // case: we found a leaf
        if (!node.left && !node.right) {
            // we only care if it's a new depth
            if (depths.indexOf(depth) < 0) {
                depths.push(depth);

                // two ways we might now have an unbalanced tree:
                //   1) more than 2 different leaf depths
                //   2) 2 leaf depths that are more than 1 apart
                if (
                    depths.length > 2 ||
                    (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
                ) {
                    return false;
                }
            }

            // case: this isn't a leaf - keep stepping down
        } else {
            if (node.left) {
                nodes.push([node.left, depth + 1]);
            }
            if (node.right) {
                nodes.push([node.right, depth + 1]);
            }
        }
    }

    return true;
}

// Breadth first search

function breadthFirstSearch(node, cb) {
    let current = [node];
    while (current.length > 0) {
        let next = [];
        for (let node of current) {
            cb(node);
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }
        current = next;
    }
}

breadthFirstSearch(root, node => console.log(node));
