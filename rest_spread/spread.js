// Define a function with three parameters:
function spreadTest(first, second, third) {
  console.log('first', first)
  console.log('second', second)
  console.log('third', third)

}

// Use spread to expand an array’s items into individual arguments:
spreadTest(...["1", "2", "3"]);

const spreadArr = [0, ...["1", "2", "3"]];
console.log('spreadArr', spreadArr)
