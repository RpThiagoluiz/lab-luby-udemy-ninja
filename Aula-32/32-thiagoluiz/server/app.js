import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const carsArray = [
  {
    image:
      "https://images.vexels.com/media/users/3/154661/isolated/lists/7288653d1853bbc9f5e2a844ffadb763-silhueta-de-vista-lateral-de-carro-de-luxo.png",
    brandModel: "APICALL",
    year: "2121",
    plate: "LAB-2021",
    color: "purple",
  },
  {
    image:
      "https://images.vexels.com/media/users/3/154661/isolated/lists/7288653d1853bbc9f5e2a844ffadb763-silhueta-de-vista-lateral-de-carro-de-luxo.png",
    brandModel: "APICALL",
    year: "2121",
    plate: "LAB-2021",
    color: "purple",
  },
];

//App Routes
app.get("/car", (req, res) => {
  res.json(carsArray);
});

app.post("/car", (req, res) => {
  const { image, brandModel, year, plate, color } = req.body;
  const carPost = { image, brandModel, year, plate, color };
  carsArray.push(carPost);
  res.json(carPost);
});

app.listen(3000, () => {
  console.log("Server started: http://localhost:3000 ᓚᘏᗢ");
});
