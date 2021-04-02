const arr = [1, 2, 3, 4];

//const arr = arr2 -> sao igual, nao copias. console.log(arr,arr2,arr === arr2)
//map nao retorna array igual

//Map
//const arr2 = arr.map(item => item)
//const arr = arr2 -> false, nao sao igualis. console.log(arr,arr2,arr === arr2)

//Slice - slice ele recebe dois paramos de onde ele comeca o corte e aodne termina, quando vc passa somente 1 ele vai ate o final do arr.

const arr2 = arr.slice(0);
//const arr = arr2 -> false, nao sao igualis. console.log(arr,arr2,arr === arr2)

//Elemento do dom
const $divs = document.querySelectorAll("divs");
const $divsCopy = Array.prototype.slice.call($divs);
console.log($divs, $divsCopy, $divs === $divsCopy); //false, tem o msm conteudo mas sao array diferentes
