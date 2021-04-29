function addTo80(n) {
  console.log(`long Time`);
  return n + 80;
}

console.log(addTo80(1));
console.log(addTo80(1));
console.log(addTo80(1));

let cache = {};
function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log(`long Time`);
    cache[n] = n + 80;
    return cache[n];
  }
}
console.log(memoizedAddTo80(5)); // long Time  85
console.log(memoizedAddTo80(5)); // 85
console.log(memoizedAddTo80(9));
console.log(memoizedAddTo80(9));

function memoizedAdd() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log(`long Time`);
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoizedAdd();
console.log(`1, ${memoized(5)}`); //long time 1, 85
console.log(`2, ${memoized(5)}`); //long time 2, 85
