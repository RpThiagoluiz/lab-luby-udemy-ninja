(function () {
  "use strict";

  const $div = document.querySelector("div");
  const $section = document.querySelector("section");
  const $container = document.querySelector(".container");

  $div.style.width = "100px";
  $div.style.height = "100px";
  $div.style.background = "#fc0";
  $div.style.fontSize = "180px";

  //OU
  //Se tem background-color no css aq sera backgroundColor
  $section.setAttribute(
    "style",
    "width: 150px; height:100px; background: blue; fontSize:2rem"
  );

  //Contains - true or false

  console.log($container.classList.contains("blue")); //false nao tem essa classe aq
  console.log($container.classList.contains("container")); //true tem essa classe dentro desse elemento html

  //Add
  $container.classList.add("blue"); //Aqui eu mudei a classe dele.
  console.log($container.classList.contains("blue")); //true

  //Toggle
  //Se existir a classe blue ele adiciona, se nao ele remove.
  $container.addEventListener(
    "click",
    function () {
      this.classList.toggle("blue");
    },
    false
  );

  //Remove

  $container.addEventListener(
    "click",
    function () {
      this.classList.remove("blue");
    },
    false
  );
})();
