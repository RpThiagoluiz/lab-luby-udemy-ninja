function myFunc() {
  function sum() {
    return 1 + 2;
  }
  return sum();
}

console.log(myFunc()); //3
console.log(sum()); //ReferenceError: sum is not defined -> Sum nao existe fora da function

/*
  ele Nao ta subscrevendo a subject 
*/
let subject = "create video";
//let subject = retornar styudy em tudo
function createThink(subject) {
  subject = "study";
  return subject;
}

console.log(subject); //undefined
console.log(createThink(subject)); //return do create video
console.log(subject); //return do create video
