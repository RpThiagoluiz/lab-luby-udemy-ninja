(function () {
  "use strict";

  const ajax = new XMLHttpRequest();
  ajax.open("GET", "./data/test.xml");
  ajax.send();

  function isReqOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  console.log(`carregando...`);

  let response = "";

  ajax.onreadystatechange = (req) => {
    if (isReqOk()) {
      try {
        response = JSON.parse(ajax.responseText);
      } catch (error) {
        response = ajax.responseText;
      }
      console.log(response);
    }
  };
})();
