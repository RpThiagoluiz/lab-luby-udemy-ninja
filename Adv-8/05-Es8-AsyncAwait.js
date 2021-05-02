// Async Await, parte do ES8.

movePlayer(100, "Left")
  .then(() => movePlayer(400, "left"))
  .then(() => movePlayer(10, "right"))
  .then(() => movePlayer(330, "left"));

async function playerStart() {
  const firstMove = await movePlayer(100, "Left"); //pause
  await movePlayer(400, "left"); //pause
  await movePlayer(10, "right"); //pause
  await movePlayer(330, "left"); //pause
}
