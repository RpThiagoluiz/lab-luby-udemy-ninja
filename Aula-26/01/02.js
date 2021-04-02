(function () {
  "use strict";

  const $main = document.querySelector(".main");
  console.log($main.className); //main, que e a classe dele
  console.log($main.id); //id-main
  console.log($main.getAttribute("class")); // o msm que o primeiro,. main
  console.log($main.getAttribute("data-js")); //data-js dele que sera o main-js

  //Retorno sempre sera string
})();
