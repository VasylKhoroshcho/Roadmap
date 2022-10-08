import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b, c) => {
  console.log(a, b, c, this);
  // Prints: a b {}
});

myEmitter.emit('event', 'a', 'b', 'c');

myEmitter.once('event-2', () => {
  console.log('Only once');
});
myEmitter.emit('event-2');
// Prints: 1
myEmitter.emit('event-2');
// Ignored
