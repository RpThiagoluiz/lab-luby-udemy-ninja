let globalScret = "1234";

const changeModule = (function (globalScret) {
  return (globalScret = "0");
})(globalScret);

console.log(globalScret);
console.log(changeModule.globalScret);
