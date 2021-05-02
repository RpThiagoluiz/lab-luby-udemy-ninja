grabTweets("twitter/thiago...", (error, thiagoTweets) => {
  if (error) {
    throw Error;
  }
});

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff Worked");
  } else {
    reject("Error, it broken");
  }
});

//promise.then((result) => console.log(result)); //ele vai devolver -> Stuff Worked

promise
  .then((result) => result + "!")
  .then((result2) => {
    console.log(result2);
    throw error;
  }) //Stuff Worked!
  .catch(() => console.log("error!"));

promise
  .then((result) => result + "!")
  .then((result2) => {
    console.log(result2);
    throw error;
  }) //Stuff Worked!
  .catch(() => console.log("error!"));
