const array = [1, 2, 3, 4];

for (let index = 0; index < array.length; index++) {
  setTimeout(() => {
    console.log(`i am at index ${index}`);
  }, 3000);
}

//Resposta vai ser sempre o index 4

for (var index = 0; index < array.length; index++) {
  (function name(closureI) {
    setTimeout(() => {
      console.log(`i am at index ${array[closureI]}`);
    }, 3000);
  })(i);
}
