import { Buffer } from 'node:buffer';
import fs from 'fs';

// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10, 11);


const buf4 = Buffer.from([1, 2, 10]);
const buf3 = Buffer.allocUnsafe(10);
const buf5 = Buffer.from([257, 257.5, -255, '1']);
const buf6 = Buffer.from('tést');


console.log(fs.readFileSync('./assert.js')) // returns buffer if encoding is not specified
console.log(buf1)
console.log(buf3)
console.log(buf4)
console.log(buf5)
console.log(buf6)
