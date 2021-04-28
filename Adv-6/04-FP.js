// Imutabilidade
const obj = { name: "Andrei" };
function clone(obj) {
  return { ...obj }; // this is pure
}
//obj.name = "Nana" -< ja mudou o nome, imutabilidade foi quebrada >-

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = "Nana";
  return obj2;
}

const updatedObj = updateName(obj);
console.log(obj, updatedObj);
//{ name: 'Andrei' } { name: 'Nana' }
