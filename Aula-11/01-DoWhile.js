/* 
  Verifica o valor antes de entrar no loop.

*/

let counter = 11;

while (counter <= 10) {
  console.log(counter++);
}

//Ele nem entra no looping

// <-- Do While -->
counter = 11;
do {
  console.log(` Do while: ${counter++}`);
} while (counter <= 10);

//Ele sempre faz, depois ele verifica.
