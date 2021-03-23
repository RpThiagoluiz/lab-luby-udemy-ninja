// <-- Global e Local -->

//function Scope
let subject = "create video";
//let subject = retornar styudy em tudo
function createThink(subject) {
  subject = "study";
  return subject;
}

console.log(subject); //undefined
console.log(createThink(subject)); //return do create video
console.log(subject); //return do create video

/*
  ele nao ta subescrevendo a `subject` 

*/
