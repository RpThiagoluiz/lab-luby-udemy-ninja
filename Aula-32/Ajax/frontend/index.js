// const ajax = new XMLHttpRequest();
// ajax.open("GET", "http://localhost:3000/user/bento"); //acessando os usuarios pelo back end.
// ajax.send();

// ajax.addEventListener(
//   "readystatechange",
//   (e) => {
//     if (ajax.readyState === 4 && ajax.status === 200) {
//       console.log(ajax.responseText);
//     }
//   },
//   false
// );

//Enviar esse usuario
const newUser = {
  name: "bentolino Lembes Lembes",
  id: 1,
  age: 251,
};

const post = new XMLHttpRequest();

post.open("POST", "http://localhost:3000/users");
//precisa enviar o header da request para o back end, caso vc va postar alguma informacao
post.send("name=thiago&id=1&age=32");
console.log(newUser);
post.onreadystatechange = function () {
  if (post.readyState === 4) {
    console.log("Usuario cadastrado!");
  }
};

//Pegando a lista de usuarios
const ajax = new XMLHttpRequest();
ajax.open("GET", "http://localhost:3000/users"); //acessando os usuarios pelo back end.
ajax.send();

ajax.addEventListener(
  "readystatechange",
  (e) => {
    if (ajax.readyState === 4 && ajax.status === 200) {
      console.log(ajax.responseText, ajax.status);
    }
  },
  false
);

//Pegando um usuario fazendo teste
// const get = new XMLHttpRequest();
// get.open("GET", "http://localhost:3000/user/chico"); //acessando os usuarios pelo back end.
// get.send();

// get.addEventListener(
//   "readystatechange",
//   (e) => {
//     if (get.readyState === 4 && get.status === 200) {
//       console.log(JSON.parse(get.responseText)); // transaforma em objt
//     }
//   },
//   false
// );
