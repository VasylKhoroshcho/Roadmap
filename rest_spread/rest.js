// Use rest to enclose the rest of specific user-supplied values into an array:
function restExample(firs, second, ...rest) {
  console.log('firs', firs)
  console.log('second', second)
  console.log('rest', rest)
}

// Invoke myBio function while passing five arguments to its parameters:
restExample("1", "2", "3", "4", "5");

const [one, two, three, ...restArr] = [1, 2, 3, 4, 5, 6, 7];
console.log('restArr', restArr)


