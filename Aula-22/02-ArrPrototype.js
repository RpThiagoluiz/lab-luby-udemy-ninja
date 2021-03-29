(function () {
  "use strict";

  function myFunction() {
    console.log(arguments.length); //6

    //arguments -> array like, nao recebe os prototypos de um array
    // arguments.forEach((element) => {
    //   console.log(element); //arguments.forEach is not a function
    // });
  }
  console.log(myFunction(1, 2, 3, 4, 5, 6)); //undefined

  function myFunc2() {
    let arr = [1, 2, 3, 4];

    arr.forEach((element) => console.log(element)); //1, 2, 3, 4;

    arr.forEach(function (item) {
      console.log(this);
    }, arguments);

    /* <-- Resposta -->
[Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }
[Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }
[Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }
[Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }

*/
  }
  myFunc2("a", "b", "c", "d", "e", "f", "g");

  function myFunc3() {
    // Array.prototype.forEach.apply(arguments, [
    //   function (item, index) {
    //     console.log(`Item da func3: ${item}`);
    //   },
    // ]);
    //Msm coisa que o de cima
    Array.prototype.forEach.call(arguments, function (item, index) {
      console.log(`Item da func3: ${item}`);
    });
  }
  myFunc3(1, 2, 3, 3, 4, 5);

  /*
  Item da func3: 1
  Item da func3: 2
  Item da func3: 3
  Item da func3: 3
  Item da func3: 4
  Item da func3: 5
*/
})();
