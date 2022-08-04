const test = {};


const myObject = {};
myObject.stack;  // Similar to `new Error().stack`

Error.captureStackTrace(myObject);
console.log(myObject.stack);


//The constructorOpt argument is useful for hiding implementation details of error generation from the user. For instance:
function MyError() {
  Error.captureStackTrace(this, MyError);
}

// Without passing MyError to captureStackTrace, the MyError
// frame would show up in the .stack property. By passing
// the constructor, we omit that frame, and retain all frames below it.
console.log(new MyError().stack);


// Added in: v16.9.0
const cause = new Error('The remote HTTP server responded with a 500 status');
const symptom = new Error('The message failed to send', { cause });

console.log(symptom);


const EventEmitter = require('node:events');
const ee = new EventEmitter();

setImmediate(() => {
  // This will crash the process because no 'error' event
  // handler has been added.
  ee.emit('error', new Error('This will crash'));
});
