//Class

class Microphone {
  //isOn = true -> assim nao rola muito, mas da tbm

  constructor(color = "black") {
    this.color = color;
    this.isOn = true;
  }

  //Ela vai esconder a funcion, ela tem ela. mas nao vai aparecer quando vc chamar o obj criado
  //ela vai fazer a msm coisa q o prototype
  //diferente da class Orientado a Obj
  toggleOnOff() {
    this.isOn ? console.log(`desliga`) : console.log(`liga`);
    //negacao do boolean, se for true vira false, false vira true
    this.isOn = !this.isOn;
  }
}

const microphone = new Microphone();
console.log(microphone);
const microphone2 = new Microphone("white");
console.log(microphone2);

microphone2.toggleOnOff();
microphone2.toggleOnOff();

//cadeia de prototype - diferente de orientacao a obj de outras classes vc tem passar uma heranca

console.log(microphone2.color.toUpperCase());
