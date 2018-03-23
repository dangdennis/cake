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

function findSuperBalanced(node) {
    let root = node;
}

function traverseDFS(node) {
    if (!node) {
        return;
    }

    if (node.left) {
        console.log(node.left);
        traverseDFS(node.left);
    }

    if (node.right) {
        console.log(node.left);
        traverseDFS(node.right);
    }
}

const root = new BinaryTreeNode(1);
const r2 = new BinaryTreeNode(2);
const r3 = new BinaryTreeNode(3);
const r4 = new BinaryTreeNode(4);
const r5 = new BinaryTreeNode(5);
const r6 = new BinaryTreeNode(6);

root.insertLeft(r2)
root.insertRight(r3)
r2.insertLeft(r4)
r3.insertLeft(r5)
r4.insertLeft(r6)

traverseDFS(root)