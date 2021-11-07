/*
    =========libuv=========

   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │      X idle, prepare X    │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
*/

const fs = require('fs');
let iteration = 1;

setInterval(() => {
  iteration++;
  console.log(`ITERATION = ${iteration} Timers - setInterval`)
});

process.on('exit', () => {
  console.log(`ITERATION = ${iteration} Close callbacks =4=`);
});
fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log(`ITERATION = ${iteration} Timers setTimeout =4=`)
    process.exit(1);
  });
  setImmediate(() => console.log(`ITERATION = ${iteration} Timers - setImmediate =4=`));

  console.log(`ITERATION = ${iteration} Pool =3=`);
  Promise.resolve().then(() => console.log(`ITERATION = ${iteration} Promise resolve =3=`));
  process.nextTick(() => console.log(`ITERATION = ${iteration} Next tick =3=`));
});

setTimeout(() => console.log(`ITERATION = ${iteration} Timers - setTimeout =2=`));
setImmediate(() => console.log(`ITERATION = ${iteration} Check - setImmediate =2=`));

Promise.resolve()
  .then(() => console.log(`ITERATION = ${iteration} Promise resolve =1=`));
process.nextTick(() => console.log(`ITERATION = ${iteration} Next tick =1=`));

console.log(`ITERATION = ${iteration} Poll =1=`);


