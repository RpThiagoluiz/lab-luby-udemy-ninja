class Elf3 {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return `The ${this.name}, attack with ${this.weapon}`;
  }
}

Elf3.prototype.Burn = function () {
  const self = this;
  function billy() {
    return `${self.name} burnning a house with ${self.weapon}`;
  }
  return billy();
};

const chicoAngry = new Elf3("chico", "pum");
console.log(chicoAngry.Burn()); //chico burnning a house with pum
