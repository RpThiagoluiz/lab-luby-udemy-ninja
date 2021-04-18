//Es6 - Class
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return `The ${this.name}, attack with ${this.weapon}`;
  }
}

const chico = new Elf("Chico", "benga");
console.log(chico instanceof Elf); //true
console.log(chico.attack()); //The Chico, attack with benga

//Object.create() ->
// The object used in Object. create actually forms the prototype of the new object,
// where as in the new Function() form the declared properties/functions do not form the prototype.
// Yes, Object. create builds an object that inherits directly from the one passed as its first argument.
