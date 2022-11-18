let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false


let gid1 = Symbol.for('ID');
let gid2 = Symbol.for('ID');


console.log(gid1 === gid2) // true

console.log(Symbol.keyFor(id1)) // undefined
console.log(Symbol.keyFor(gid1)) // ID



const obj = {
  [id1]: 'Simbol value',
  [id2]: 'Another value',
  [gid2]: 'ID value'
}


console.log(obj[id1]);
console.log(obj[id2]);
console.log(obj[gid1]); // would be present because gid1 === gid2
