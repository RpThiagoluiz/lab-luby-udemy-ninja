function createMicrophone(color = "black") {
  let isOn = true;

  const toggleOnOff = function () {
    isOn ? console.log(`desliga`) : console.log(`liga`);
    isOn = !isOn;
  },
//Aq tbm vc nao aproveita muito o codigo, vc precisa recriar, toda vez q ela for refeita ela vai criar.
//Prototype para ele reutilizar

  return {
    color,
    toggleOnOff,
  };
}
