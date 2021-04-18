//Reduce
const total = orders.reduce((acc, cur) => acc + cur);

//Map
const whitTax = orders.map((v) => v * 1.1);

//Filter
const highValue = orders.filter((v) => v > 100);

//Async / await
const a = async () => {
  return Promise.resolve(Math.random());
  //them
  //them
};

const sumRandomAsnyncNums = async () => {
  const first = await random();
  const second = await random();
  const third = await random();

  console.log(`Result ${first}, ${second}, ${third}`);
};
