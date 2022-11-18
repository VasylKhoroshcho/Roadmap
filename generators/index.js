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
