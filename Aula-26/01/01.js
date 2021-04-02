(function () {
  "use strict";

  let $main = document.querySelector(".main");
  let $mainContent = document.querySelector(".main-content");
  let $mainHeader = document.querySelector(".main-header");
  let $firstText = $mainContent.firstChild;

  let $h1 = document.querySelector(".main-header__title");

  let newTextNode = document.createTextNode("Novo P!");
  let $newP = document.createElement("p");
  $newP.appendChild(newTextNode);
  $main.appendChild($newP);

  // $mainContent.appendChild($mainHeader);
  //$mainContent.insertBefore($mainHeader,$firstText)

  let $mainHeaderClone = $mainHeader.cloneNode(true);

  //$mainContent.appendChild($mainHeaderClone);

  //console.log(document.querySelector(".main-header").length);

  console.log($h1.hasChildNodes()); //true - ele tem filhos
  //$main.appendChild(newTextNode);

  //Remover
  //$mainHeader.removeChild($h1)

  //.replaceChild(new,hold)

  //hasChildNode Verificar se o elemento tem filhos
})();
