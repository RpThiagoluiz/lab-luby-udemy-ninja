(function () {
  try {
    throw new Error();
  } catch (err) {
    var err = 5;
    var boo = 10;
    console.log(err);
  }
  //Guess what the output is here:
  console.log(err);
  console.log(boo);
})();

//Async Error Handling 2
Promise.resolve("AsyncSuccess!").then((response) => console.log(response)); //AsyncSuccess!

Promise.resolve("AsyncFail!")
  .then((response) => {
    throw new Error("#1 Fail");
    return response;
  })
  .then((response) => console.log(response))
  .catch((err) => {
    console.log(err); //Error: #1 Fail
  });

//Try catch

(async function () {
  try {
    await Promise.reject("oopsie #1");
    await Promise.resolve("oopsie #2");
  } catch (error) {
    console.log(error);
  }
  console.log("is this still god?");
})();
