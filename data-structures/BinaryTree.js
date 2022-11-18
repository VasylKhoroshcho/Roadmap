class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    static searchTree(data, node) {
        if (data > node.data) {
            if (node.right !== null) {
                return this.searchTree(node.right);
            } else {
                node.right = new Node(data);
                return;
            }
        } else {
            if (node.left !== null) {
                return this.searchTree(node.left);
            } else {
                node.left = new Node(data);
                return;
            }
        }
        return null;
    }

    add(data) {
        if (this.root === null) {
            this.root = new Node(data);
            return;
        } else {
            return this.searchTree(data, this.root);
        }


    }
}