//Prototype
//cadeia de funcoes que o js tem. Ele vai procurando para o pai ate chegar no methodo q vc quer
// vai subindo ate chegar no teto.

function Microphone(color = "black") {
  this.color = color;
  //this vai referenciar o obj criado. a arrow faz isso de boas auto

  this.isOn = true;

  //Msm assim ele nao vai receber e vai ter q criar pra todos.
  //Reaproveitar ele criando por fora.
  // this.toggleOnOff = function() {
  //   this.isOn ? console.log(`desliga`) : console.log(`liga`);
  //   this.isOn = !this.isOn;
  // }

  //toggleOnOff();
  //explodir error sem o this, q ele nao vai achar a referencia
  //function que vai ter o this tbm. para ela referenciar o obj q vc quer
}

//Ele vai adicionar, extender essa funcao a funcao de cima.
//E ela nao vai estar mais no obj, no console.log >- ela vai vir como um prototype ad dela.
Microphone.prototype.toggleOnOff = function () {
  this.isOn ? console.log(`desliga`) : console.log(`liga`);
  this.isOn = !this.isOn;
};

const microphone = new Microphone();
const microphone2 = new Microphone("white");
console.log(microphone);
//Ele vai ser classicado como um Microphone {} -> sem o new ele sera um undefined
//agora com o new ele tem o seu proprio prototype.

console.log(microphone2);

microphone2.toggleOnOff(); //desliga
microphone2.toggleOnOff(); //liga
