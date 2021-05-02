const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "hiii");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Pookie");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Are you whating for?");
});

//Ele vai esperar todas as promises se Resolverem, e entao
//armazenar seus valores, no caso no vamos
//apenas monstrar os valores em tela
Promise.all([promise2, promise3, promise4]).then((values) => {
  console.log(values);
});

//Desconstruir ela tbm assim
const [repoData, followerData, followingData] = await Promise.all([
  getRepoUserInfo,
  getFollowersInfo,
  getFollowingApi,
]);
