let dragon = {
  name: "Chico",
  fire: true,
  figh() {
    return 5;
  },
  sing() {
    //Lizard nao consegue cantar porq ele nao tem fogo
    //undefined
    if (this.fire) {
      return `I am ${this.name}, the breather of fire!`;
    }
  },
};

console.log(dragon.sing()); //I am Chico, the breather of fire!

let lizard = {
  name: "May",
  fight() {
    return 2;
  },
};

lizard.__proto__ = dragon; //I am May, the breather of fire!

const singLizard = dragon.sing.bind(lizard);
console.log(singLizard()); //I am May, the breather of fire!
