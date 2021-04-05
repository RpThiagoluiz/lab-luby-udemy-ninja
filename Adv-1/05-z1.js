const wizard = {
  name: "Merlin",
  health: 100,
  heal(numberOne, numberTwo) {
    return (this.health += numberOne + numberTwo);
  },
};

const archer = {
  name: "Robin Hood",
  health: 30,
};

console.log(`1 ${archer.health}`);
wizard.heal(archer); //nao acontece nda, porq o this do return vai ser ele msm
console.log(`2 ${archer.health}`);
wizard.heal.call(archer, 50, 30);
console.log("Success heal", archer);

// Apply, ele vai receber um array de argumentos.
wizard.heal.call(archer, [40, 50]);

//bind ele funciona como um storage, ele vai salvar a function de heal para ela ser utilizada futuramente.

const healArcherHelpHim = wizard.heal.bind(archer, 40, 50);

//Destructuring
const nameArcher = archer.name;
console.log(nameArcher);

const { name } = archer;
console.log(name);

const NewArray = [
  { id: 01, name: "thiago" },
  { id: 02, name: "Bentolino" },
  { id: 03, name: "lolzeiro" },
];
const nameArray = NewArray[0];
console.log(nameArray.name); //{ id: 1, name: 'thiago' }

const [nameId, nameId2, nameId3] = NewArray;
console.log(nameId, nameId2, nameId3);
