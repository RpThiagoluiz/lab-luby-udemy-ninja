//OOP
// const elf = {
//   name: "Orwell",
//   weapon:"bow",

//   attack(){
//     return 'attack with' + elf.weapon
//   }
// }

// const elf2 = {
//   name: "Sally",
//   weapon:"bow",

//   attack(){
//     return 'attack with' + elf.weapon
//   }
// }

const elfFunctionsStore = {
  attack() {
    console.log(`${this.name},attack with ${this.weapon}`);
  },
};

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctionsStore);
  console.log(newElf.__proto__);
  // { attack: [Function: attack] }
  // { attack: [Function: attack] }
  newElf.name = name;
  newElf.weapon = weapon;

  return newElf;
}

const chico = createElf("chico", "stones");
const tonha = createElf("tonha", "banha");
chico.attack();
tonha.attack();
