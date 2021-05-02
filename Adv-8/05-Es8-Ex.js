//Lembra que o fecth é uma promise.
fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then(console.log);

async function fectchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}
fectchUsers();

//PromiseAll
const apiUsers = "https://jsonplaceholder.typicode.com/users";
const apiPosts = "https://jsonplaceholder.typicode.com/comments";
const apiAlbums = "https://jsonplaceholder.typicode.com/albums";

const urls = [apiUsers, apiPosts, apiAlbums];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("error"));

const getData = async () => {
  try {
    const [users, post, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json()))
    );

    console.log("users", users);
    console.log("post", post);
    console.log("albums", albums);
  } catch (error) {
    console.log("opps! Error");
  }
};
