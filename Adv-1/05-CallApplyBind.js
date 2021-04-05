function a() {
  console.log(`hi, a`);
}
a.call();
a.apply();

//sao a msm coisa que chamar a function diretamente.

const wizard = {
  name: "Merlin",
  health: 100,
  heal() {
    return (this.health = 100);
  },
};

const archer = {
  name: "Robin Hood",
  health: 30,
};

console.log(`1 ${archer.health}`);
wizard.heal(archer); //nao acontece nda, porq o this do return vai ser ele msm
console.log(`2 ${archer.health}`);
wizard.heal.call(archer);
console.log(`Success heal ${archer.health}`);
