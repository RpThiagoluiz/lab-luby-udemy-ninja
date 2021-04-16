class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
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

const bento = new Elf2("bento", "cumari");
console.log(bento.attack()); //bento, attack with cumari
