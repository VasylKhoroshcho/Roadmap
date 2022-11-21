class Node {
  constructor(data, parent) {
    this.left = null;
    this.right = null;
    this.parent = parent || null;
    this.data = data;
  }

  get height() {
    return Math.max(this.leftSubtreeHeight, this.rightSubtreeHeight);
  }

  get leftSubtreeHeight() {
    return this.left ? this.left.height + 1 : 0;
  }

  get rightSubtreeHeight() {
    return this.right ? this.right.height + 1 : 0;
  }

  get balanceFactor() {
    return this.leftSubtreeHeight - this.rightSubtreeHeight;
  }

  get isParentRightChild() {
    return this.parent.right === this;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (!this.root) {
      this.root = new Node(data);
      return;
    }

    let node = this.root;

    while (true) {
      if (data === node.data) return data;

      if (data < node.data && node.left) node = node.left;
      if (data > node.data && node.right) node = node.right;

      if (data < node.data && !node.left) {
        node.left = new Node(data);
        return node.left;
      }
      if (data > node.data && !node.right) {
        node.right = new Node(data);
        return node.right;
      }
    }
  }

  insertBulk(array) {
    array.map((el) => this.insert(el));
  }

  search(data) {
    if (!this.root) {
      return null;
    }

    let node = this.root;

    while (true) {
      if (node.data === data) return data;

      if (data < node.data && !node.left) return null;
      if (data > node.data && !node.right) return null;

      if (data < node.data && node.left) node = node.left;
      if (data > node.data && node.right) node = node.right;
    }
  }

  getArray() {
    const result = [];
    const toVisit = [this.root];

    while (toVisit.length) {
      const current = toVisit.shift();

      if (!current) {
        result.push("null");
        continue;
      }

      result.push(current.data);
      toVisit.push(current.left);
      toVisit.push(current.right);
    }

    return result.join(",");
  }
}

class BSTbalanced {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (!this.root) {
      this.root = new Node(data);
      return;
    }

    let node = this.root;

    while (true) {
      if (data === node.data) return data;

      if (data < node.data && node.left) node = node.left;
      if (data > node.data && node.right) node = node.right;

      if (data < node.data && !node.left) {
        node.left = new Node(data, node);

        this.balanceUpstream(node);

        return node.left;
      }
      if (data > node.data && !node.right) {
        node.right = new Node(data, node, true);

        this.balanceUpstream(node);

        return node.right;
      }
    }
  }

  insertBulk(array) {
    array.map((el) => this.insert(el));
  }

  search(data) {
    if (!this.root) {
      return null;
    }

    let node = this.root;

    while (true) {
      if (node.data === data) return data;

      if (data < node.data && !node.left) return null;
      if (data > node.data && !node.right) return null;

      if (data < node.data && node.left) node = node.left;
      if (data > node.data && node.right) node = node.right;
    }
  }

  getArray() {
    const result = [];
    const toVisit = [this.root];

    while (toVisit.length) {
      const current = toVisit.shift();

      if (!current) {
        result.push("null");
        continue;
      }

      result.push(current.data);
      toVisit.push(current.left);
      toVisit.push(current.right);
    }

    return result.join(",");
  }

  swapParentChild(oldChild, newChild, parent) {
    if (parent) {
      const side = oldChild.isParentRightChild ? "right" : "left";
      // this set parent child AND also
      parent[side] = newChild;
    } else {
      // no parent? so set it to null
      newChild.parent = null;
      this.root = newChild;
    }
  }

  leftRotation(node) {
    const newParent = node.right; // e.g. 3
    const grandparent = node.parent; // e.g. 1

    // make 1 the parent of 3 (previously was the parent of 2)
    this.swapParentChild(node, newParent, grandparent);

    const newRight = newParent.left || null;

    // do LL rotation
    newParent.left = node; // makes 2 the left child of 3
    newParent.parent = node.parent;
    node.parent = newParent;
    node.right = newRight

    if (newRight) newRight.parent = node;
  }

  rightRotation(node) {
    const newParent = node.left;
    const grandparent = node.parent;

    this.swapParentChild(node, newParent, grandparent);

    const newLeft = newParent.right || null

    // do RR rotation
    newParent.right = node;
    newParent.parent = node.parent;
    node.parent = newParent;
    node.left = newLeft;

    if (newLeft) newLeft.parent = node;
  }

  rightLeftRotation(node) {
    this.rightRotation(node.right);
    return this.leftRotation(node);
  }

  leftRightRotation(node) {
    this.leftRotation(node.left);
    return this.rightRotation(node);
  }

  balance(node) {
    if (node.balanceFactor > 1) {
      // left subtree is higher than right subtree
      if (node.left.balanceFactor > 0) {
        this.rightRotation(node);
      } else if (node.left.balanceFactor < 0) {
        this.leftRightRotation(node);
      }
    } else if (node.balanceFactor < -1) {
      // right subtree is higher than left subtree
      if (node.right.balanceFactor < 0) {
        this.leftRotation(node);
      } else if (node.right.balanceFactor > 0) {
        this.rightLeftRotation(node);
      }
    }
  }

  balanceUpstream(node) {
    let current = node;
    let newParent;
    while (current) {
      newParent = this.balance(current);
      current = current.parent;
    }
    return newParent;
  }
}

const array = Array.from({ length: 50000 }, () =>
Math.floor(Math.random() * 50000)
);


const randomItem = array[Math.floor(Math.random() * array.length)];
console.log("randomItem", randomItem);

const bst = new BST();
const bstBalanced = new BSTbalanced();

bst.insertBulk(array);
bstBalanced.insertBulk(array);

console.time("BST search valid item");
const bstResult = bst.search(randomItem);
console.log("bstResult: ", Boolean(bstResult));
console.timeEnd("BST search valid item");

console.time("BST Balanced search valid item");
const bstBalancedResult = bstBalanced.search(randomItem);
console.log("bstResult: ", Boolean(bstBalancedResult));
console.timeEnd("BST Balanced search valid item");

console.time("Map search valid item");
const result = array.find((el) => el === randomItem);
console.log("Map result: ", Boolean(result));
console.timeEnd("Map search valid item");
