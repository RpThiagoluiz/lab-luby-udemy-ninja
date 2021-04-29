//FP - oque fazer com a data

function doubleAttack(character) {
  return Object.assign({}, character, {
    attackFn: () => `The ${this.name}, attack with ${this.weapon} twice`,
  });
}

function Elf(name, weapon, type) {
  let elf = {
    name,
    weapon,
    type,
  };

  return doubleAttack(elf);
}

Elf = attack(); //And other functions

//Msms coisa - oque a data faz
class Elfc extends Character {
  constructor(name, weapon, buff, type) {
    super(name, weapon, buff);
    this.type = type;
  }
  doubleAttack() {
    return `The ${this.name}, attack with ${this.weapon} twice`;
  }
}
