//OOP
//Super Class
class Character {
  constructor(name, weapon, buff) {
    (this.name = name), (this.weapon = weapon), (this.buff = buff);
  }

  attack() {
    return `The ${this.name}, attack with ${this.weapon}`;
  }

  useBuff() {
    return `The ${this.name}, her buff ${this.buff}`;
  }
}

//subClass
class Elf extends Character {
  constructor(name, weapon, buff, type) {
    super(name, weapon, buff);
    this.type = type;
  }
  doubleAttack() {
    return `The ${this.name}, attack with ${this.weapon} twice`;
  }
}

class Ogre extends Character {
  constructor(name, weapon, buff, color) {
    super(name, weapon, buff);
    this.color = color;
  }

  makeFort() {
    return `Strongest fort in the World Made ${this.name},${this.color}`;
  }
}

const tonha = new Elf("Tonha", "barrigada", "fast eat", "gordita");
const chico = new Ogre("chico", "bingola", "sarrada Aeria", "Arlekin");
