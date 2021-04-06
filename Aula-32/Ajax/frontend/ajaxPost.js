const { Console } = require("node:console");

const ajax = new XMLHttpRequest();

const newUser = {
  bento: {
    name: "bento",
    id: 1,
    idade: 251,
  },
};

ajax.open("POST", "http://localhost:3000/users");
//precisa enviar o header da request para o back end, caso vc va postar alguma informacao
ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
ajax.send(newUser);

console.log("Cadastrando usuario...");

ajax.onreadystatechange = function () {
  if (ajax.readyState === 4) {
    console.log("Usuario cadastrado!");
  }
};
