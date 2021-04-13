//Is function return other function or have a param || args

function letAdamLogin() {
  let array = [];

  for (let index = 0; index < 10000; index++) {
    array.push(index);
  }

  console.log("Access Granted to adam");
}

function letEvaLogin() {
  let array = [];

  for (let index = 0; index < 10000000; index++) {
    array.push(index);
  }

  console.log("Access Granted to Eva");
}

// letAdamLogin();
// letEvaLogin();

//Its no clean,
//Nao é perfomatico e ainda repetitivo.

//Codigo mais limpo e perfomatico
function letUserLogin(user) {
  let array = [];
  for (let index = 0; index < 10000000; index++) {
    array.push(index);
  }
  console.log(`Access Granted to ${user}`);
}

letUserLogin("chico");
letUserLogin("bento");
letUserLogin("tonha");

//Complementar ela
const accessTo = (user, level) =>
  console.log(`Access Granted to ${level} ${user}`);

function letThiLogin(user) {
  let array = [];
  for (let index = 0; index < 10000000; index++) {
    array.push(index);
  }
  accessTo(user);
}

letThiLogin("Thji"); //Access Granted to Thji
//Time diferente para cada um logar.
//quanto mais diferente for mmais ela tem q ser `flexivel`.
function letAdminLogin(admin) {
  let array = [];
  for (let index = 0; index < verify; index++) {
    array.push(index);
  }
  accessTo(admin);
}

//HOF vamos quebrar a function para ela se tornar mais perfomatica,
// Ocupar menos Memoria de processamento e ser tornar mais rapida

function authFast(verify) {
  let array = [];
  for (let index = 0; index < verify; index++) {
    array.push(index);
  }

  return true;
}

function letPerson(person, fn) {
  if (person.level === "admin") {
    fn(500000);
  } else if (person.level === "user") {
    fn(10000);
  }
  return accessTo(person.name, person.level);
}

letPerson({ level: "user", name: "jhon Doe" }, authFast); //Access Granted to jhon Doe
letPerson({ level: "admin", name: "Saly" }, authFast);
