//msm coisa
// import express from "express";
// import cors from "cors";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const users = [
  {
    name: "chico",
    id: 3,
    age: 2,
  },
  {
    name: "tonha",
    id: 2,
    age: 14,
  },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/users", (request, response) => {
  response.json({ users });
});

app.get("/user/:name", (request, response) => {
  const name = request.params.name;
  const hasUser = users.some((user) => user.name === name);
  if (hasUser) {
    return response.json(users.filter((user) => user.name === name)[0]);
  } else {
    response.status(404).json({ error: "BAD CALL!" });
  }
});

app.get("/user:id", (request, response) => {
  response.json(request.params.id);
});

app.post("/users", (request, response) => {
  const name = request.body.name;
  const id = request.body.id;
  const age = request.body.age;
  const hasUser = users.some((user) => user.name === name);

  // if (hasUser) {
  //   response.json(users);
  // } else {
  //   users.push({
  //     name,
  //     id,
  //     age,
  //   });
  //   response.json(users);
  // }

  if (!hasUser) {
    users.push({
      name,
      id,
      age,
    });
    response.json(users);
  }
});

app.listen(3000, console.log("server on ༼ つ ◕_◕ ༽つ"));
