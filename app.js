const express = require("express");

const app = express();

app.use(express.static("public"));

const port = 5000;

app.set("view engine", "hbs");

const dummyLists = [
  {
    uuid: "adfeiorewr",
    name: "Grocery list",
  },
  {
    uuid: "wererweorerwcv",
    name: "Todo list",
  },
];

app.get("/", (req, res) => {
  res.render("index", { lists: dummyLists });
});

app.listen(port, () => {
  console.log("express is listening on port " + port);
});
