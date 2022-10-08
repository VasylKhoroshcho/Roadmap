const buffer = require('buffer');

// Get the results in bytes
console.log(
  "The maximum size allowed for a buffer:",
  buffer.constants.MAX_LENGTH,
  "bytes"
);
console.log(
  "The maximum size allowed for a string: ",
  buffer.constants.MAX_STRING_LENGTH,
  "bytes"
);

// In case you want to get the results in MB
console.log(
  "The maximum size allowed for a buffer:",
  buffer.constants.MAX_LENGTH / (1024 * 1024),
  "MB"
);

console.log(
  "The maximum size allowed for a string: ",
  buffer.constants.MAX_STRING_LENGTH / (1024 * 1024),
  "MB"
);
