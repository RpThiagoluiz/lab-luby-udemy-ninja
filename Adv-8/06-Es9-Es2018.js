//Obj spread operator

const animals = {
  tiger: 25,
  lion: 5,
  monkey: 2,
  shark: 180,
};

const { tiger, lion, ...rest } = animals;
console.log(tiger);
console.log(rest); //obj com o restante dos animals
console.log(animals); //Sem mudar o estado inicial do array ou do obj

const array = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}
sum(...array);

function objSpreead(p1, p2, p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}

objSpreead(tiger, lion, rest);

// Async do destructuring
