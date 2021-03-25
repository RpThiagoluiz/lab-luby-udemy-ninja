let arr = [1, 2, 3, 4, 5];

let mapArr = arr.map((item) => item + 10);

let filter = mapArr.filter((item) => item > 13);

console.log(`Arr: ${arr}; mapArr: ${mapArr}; Filter > 13 ${filter} `);
