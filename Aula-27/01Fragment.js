(function (win, doc) {
  "use strict";

  function afterDomContentLoaded() {
    let fragment = doc.createDocumentFragment();
    let childP = doc.createElement("p");
    let textChildP = doc.createTextNode("Texto da tag p!");

    childP.appendChild(textChildP);
    fragment.appendChild(childP);

    doc.body.appendChild(fragment); //Elemento simbolico igual no react. Somente joga o conteudo dele pra dentro do HTML
  }

  function afterWindowLoad() {
    alert("AfterWindowLoad!");
  }

  doc.addEventListener("DOMContentLoaded", afterDomContentLoaded, false);
  window.addEventListener("load", afterWindowLoad, false);
})(window, document);
