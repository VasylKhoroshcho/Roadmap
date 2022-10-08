import util from 'node:util';

async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn); // callbackify

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});


const debuglog = util.debuglog('foo'); // debuglog

debuglog('hello from foo [%d]', 123);


class Foo {
  get [Symbol.toStringTag]() {
    return 'bar';
  }
}

class Bar {}

const baz = Object.create(null, { [Symbol.toStringTag]: { value: 'foo' } });

util.inspect(new Foo()); // 'Foo [bar] {}'
util.inspect(new Bar()); // 'Bar {}'
util.inspect(baz);       // '[fo


util.types.isBooleanObject(false) //TYPES
