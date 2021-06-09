//Object Literal
const microphone = {
  color: "black",
  isOn: true,
  //toggleOnOff(){}
  //toggleOnOff:() => {}
  toggleOnOff: function () {
    microphone.isOn ? console.log(`desliga`) : console.log(`liga`);
    //negacao do boolean, se for true vira false, false vira true
    microphone.isOn = !microphone.isOn;
  },
};

//Precisar reaproveitar control C + control V
microphone.toggleOnOff();
microphone.toggleOnOff();
