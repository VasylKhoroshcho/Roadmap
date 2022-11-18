let weakMap = new WeakMap();

let obj = { test: 'test '};

weakMap.set(obj, "Value!");

try {
  weakMap.set("test", "Whoops"); // Won't work because a key must be an object
} catch (err) {
  console.log(err.message);
}


console.log(weakMap.get(obj))

const arr = [obj];

obj = null;

// Still can get Value!

console.log(weakMap.get(arr[0]))

// There is no way how we can get Value!



let cache = new WeakMap();

function process(obj) {
  if (!cache.has(obj)) {
    let result = obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

let test = { size: 10 };

let result1 = process(test);
let result2 = process(test);

console.log(cache.get(test))

test = null;

// Now cache is empty
