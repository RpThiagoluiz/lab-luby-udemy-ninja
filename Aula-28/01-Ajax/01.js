(function () {
  "use strict";

  const ajax = new XMLHttpRequest();

  ajax.open("GET", "./data/data.json");
  ajax.send();

  function isReqOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  console.log(`carregando...`);

  ajax.onreadystatechange = (req) => {
    if (isReqOk()) {
      let data = JSON.parse(ajax.responseText); //vem como Obj
      console.log("Requisicao OK\n", data.message);
    } else {
      console.log("Deu problema:()");
    }
  };

  //ajax.addEventListener('readystatechange',function(){
  //   console.log('Terminou a req!',ajax.readyState)
  // })
})();
