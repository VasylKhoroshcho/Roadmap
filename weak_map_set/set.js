let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john);
visitedSet.add(pete);
visitedSet.add(john);

try {
  console.log(typeof null);
  visitedSet.add(null);
} catch (err) {
  console.log(err.message);
}

console.log(visitedSet.has(john)); // true

console.log(visitedSet.has(mary)); // false

john = null;

console.log(visitedSet.has(john)); // false
