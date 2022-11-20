function* generator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3


const foo = generator;

let str = '';
for (const val of foo()) {
  str = str + val;
}

console.log(str);

console.log(gen.next().value); // 4
console.log(gen.next().value); // undefined


function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const infGenerator = infinite(); // "infGenerator { }"

console.log(infGenerator.next().value); // 0
console.log(infGenerator.next().value); // 1
console.log(infGenerator.next().value); // 2


function* gen2() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen2();

g.next();        // { value: 1, done: false }
g.return('foo'); // { value: "foo", done: true }
g.next();        // { value: undefined, done: true }



function* gen3() {
  yield 1;
  yield 2;
  yield 3;
}


console.log([...gen3()])


function* gen4() {
  yield* [1, 3, 4, 6];
}


console.log([...gen4()])
