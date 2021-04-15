function callMeMAybe() {
  const callMe = "Hi!, I am now here!";

  setTimeout(function () {
    console.log(callMe);
  }, 4000);
}

callMeMAybe(); // Hi!, I am now here!

function heavyDuty() {
  const bigArray = new Array(7000).fill("❣");
  console.log(bigArray);
}
heavyDuty(); //Todos os corracoes.

//Clousers -> retornar uma function

function heavyDuty2() {
  const bigArray = new Array(7000).fill("❣");
  console.log("created Again!");

  return function (index) {
    return bigArray[index];
  };
}

const getHeavy = heavyDuty2();
getHeavy(668);
getHeavy(700);
getHeavy(800);

/* Encapsulation */

const makeNuclearButton = () => {
  let timeWhithoutDestruction = 0;
  const passTime = () => timeWhithoutDestruction++;
  const totalPeaceTime = () => timeWhithoutDestruction;
  const launch = () => {
    timeWhithoutDestruction = -1;
    return "💥";
  };
  setInterval(passTime, 1000);

  return {
    launch,
    totalPeaceTime,
  };
};

const ohno = makeNuclearButton();
console.log(ohno.totalPeaceTime()); //0
console.log(ohno.totalPeaceTime()); //timer rodando. toda vez o numero sera maior
console.log(ohno.launch()); //BOOM!
