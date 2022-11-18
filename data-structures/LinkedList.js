class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    size() {
        return this.length;
    }

    head() {
        return this.head;
    }

    add(element) {
        const node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        this.length++;
    }

    remove(element) {
        let currentNode = this.head;
        let previousNode;

        if (currentNode.element === element) {
            this.head == currentNode.next;
        } else {
            while(currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        this.length--;
    }

    isEmpty() {
        return this.length === 0;
    }

    indexOf(element) {
        let currentNode = this.head;
        let index = -1;

        while(currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }

            currentNode = currentNode.next;
        }

        return -1;
    }

    elemetnAt(index) {
        if (index >= this.length) return false;

        let currentNode = this.head;
        let currentIndex = 0;

        while(currentIndex < index) {
            currentIndex++;
            currentNode = currentNode.next;
        }

        return currentNode.element;
    }

    addAt(index, element) {
        if (index > this.length) return false;

        const node = new Node(element);
        let currentNode = this.head;
        let currentIndex = 0;
        let previousNode;

        if (index === 0) {
            node.next = currentNode;
            this.head = node;
        } else {
            while(currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = node;
            node.next = currentNode;
        }
        this.length++;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) return false;
        let currentNode = this.head;
        let currentIndex = 0;
        let previousNode;

        if (index === 0) {
            this.head = currentNode.next;
        } else {
            while(currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
    }
}


const cats = new LinkedList();

cats.add('Cat one');
cats.add('Cat two');
cats.add('Cat three');
cats.addAt(3, 'Cat one and half');
cats.removeAt(0);
cats.remove ('Cat two');

console.log(cats.elemetnAt(0));
console.log(cats.elemetnAt(1));
console.log(cats.elemetnAt(2));
console.log(cats.elemetnAt(3));

