//PEga no site json placeholders

const apiUsers = "https://jsonplaceholder.typicode.com/users";
const apiPosts = "https://jsonplaceholder.typicode.com/comments";
const apiAlbums = "https://jsonplaceholder.typicode.com/albums";

const urls = [apiUsers, apiPosts, apiAlbums];

Promise.all(
  urls.map(async (url) => {
    return await fetch(url).then((resp) => resp.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("error"));
//Se ouver um erro em qualquer promise ele vai avisar.
