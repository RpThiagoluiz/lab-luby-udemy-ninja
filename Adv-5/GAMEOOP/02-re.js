class Elf {
  constructor(name, weapon) {
    console.log("this is", this); //this is Elf {}
    this.name = name;
    this.weapon = weapon;

    console.log("this is", this); //this is Elf { name: 'chico', weapon: 'stones' }
  }
}

const chico = new Elf("chico", "stones");
const tonha = new Elf("tonha", "banha");
console.log(chico.name);

//Same think

const Elf2 = new Function(
  "name",
  "weapon",
  `this.name = name; this.weapon=weapon`
);

Elf2.prototype.attack = function () {
  return `${this.name}, attack with ${this.weapon}`;
};

Elf2.prototype.build = function () {
  return `${this.name}, build a house`;
};

const bento = new Elf2("bento", "cumari");
console.log(bento.attack()); //bento, attack with cumari
console.log(bento.prototype); //undefined
console.log(bento.build()); //bento, build a house

class Elf3 {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
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
