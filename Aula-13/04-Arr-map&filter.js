let arr = ["🐱‍🏍", "🐱‍👤", "🤳", "🎂", "😜", "🌹", "💋"];
let arrNum = [1, 2, 3, 4, 5, 6, 7];

//🐱‍🚀 map -> retorno do map vai ser um novo arr.

let mapArrSum = arrNum.map((item) => item + 1);
console.log(arrNum);
console.log(`Arr com map: ${mapArrSum}`);

//ForEach
let newArr = [];
arrNum.forEach((index, item) => newArr.push({ index: index, item: item }));
console.log(newArr);

//🐱‍🚀 filter -> filtrar os itens do arr, segue a msm logica do map

let filterArr = arrNum.filter((item) => item > 2);
console.log(`ArrNum, somente os itens maiores que 2: ${filterArr}`);
