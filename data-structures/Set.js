class mySet {
    constructor(){
        this.collection = [];
    }

    has(element) {
        return this.collection.indexOf(element) !== -1;
    }

    values() {
        return this.collection;
    }

    add(element) {
        if (!this.has(element)) {
            this.collection.push(element);

            return true;
        }

        return false;
    }

    remove(element) {
        if (this.has(element)) {
            const index = this.collection.indexOf(element);

            this.collection.splice(index, 1);

            return true;
        }

        return false;
    }

    size() {
        return this.collection.length;
    }

    union(otherSet) {
        const unionSet = new mySet();

        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));

        return unionSet;
    }

    intersection(otherSet) {
        const intersectionSet = new mySet();

        this.values().forEach(value => otherSet.has(value) ? intersectionSet.add(value) : false);

        return intersectionSet;
    }

    difference(otherSet) {
        const differenceSet = new mySet();

        this.values().forEach(value => otherSet.has(value) ? false : differenceSet.add(value));

        return differenceSet;
    }

    subset(otherSet) {
        return this.values().every(value => otherSet.has(value));
    }
}

const letters = new mySet();

letters.add('a');
letters.add('b');
letters.add('c');
letters.add('a');
letters.add('c');
letters.add('d');

console.log(letters.values());
console.log(letters.size());
console.log(letters.has('r'));
console.log(letters.has('a'));
console.log(letters.remove('a'));
console.log(letters.remove('b'));
console.log(letters.remove('b'));
console.log(letters.size());
console.log(letters.values());