//Obj Factory

function createMicrophone(color = "black") {
  let isOn = true;
  //se nao passar nda vai ser black
  return {
    color,
    //ele vai jogar o valor aqui pra fora. pegando o valor de fora
    //Ou se vc quiser esconder ele tbm e nao return vc pode. ele vai estar por fora
    //Request agente faz isso as vezes pra omitir algum dado returnado.
    isOn,
    //toggleOnOff(){}
    //toggleOnOff:() => {}
    toggleOnOff: function () {
      isOn ? console.log(`desliga`) : console.log(`liga`);
      //negacao do boolean, se for true vira false, false vira true
      isOn = !isOn;
    },
  };
}

const microphoneBlack = createMicrophone();
console.log(microphoneBlack.color);

const microphoneWhite = createMicrophone("white");
console.log(microphoneWhite.color);
