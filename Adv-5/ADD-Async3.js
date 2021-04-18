const promise = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((user) => {
    throw new Error("uh oh");
  })
  .then((user) => console.log("😊", user.title))
  .catch((err) => console.error("😤", err));

console.log("⌛ Synchronous");

const getFruit = async () => {
  const fruits = {
    pineapple: "🍍",
    peach: "🍑",
    strawberry: "🍓",
  };

  return Promise.resolve(fruits[name]);
};

getFruit("peach").then(console.log);

const makeSmoothie = async () => {
  try {
    const a = getFruit("pineapple");
    const b = getFruit("strawberry");

    const smoothie = await Promise.all([a, b]);
    return smoothie;
  } catch (error) {}

  return smoothie;
};
