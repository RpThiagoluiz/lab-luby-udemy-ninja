var user1 = { name: "nerd", org: "dev" };
var user2 = { name: "nerd", org: "dev" };
var eq = user1 == user2;
console.log(eq); // gives false

const equi = JSON.stringify(user1) === JSON.stringify(user2);

console.log(equi); //true
