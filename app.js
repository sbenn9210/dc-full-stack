const express = require("express");
const db = require("./lib/db");

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
const dummyItems = [
  {
    uuid: "adsfagg",
    description: "Wash the dog",
    display_order: 1,
  },
  {
    uuid: "pwprperwer",
    description: "Wash the car",
    display_order: 2,
  },
];

//the homepage shows your lists
app.get("/", (req, res) => {
  db.getLists().then((lists) => {
    res.render("index", { lists: lists });
  });
});

// the list page shows the items in the list

app.get("/list/:listUUID", (req, res) => {
  res.render("list_page", { listName: "Dummy List", items: dummyItems });
});

const startExpressApp = () => {
  app.listen(port, () => {
    console.log("express is listening on port " + port);
  });
};

const bootupSequenceFailed = (err) => {
  console.error("Unable to connect to the database: ", err);
  process.exit(1);
};

// global kickoff point
db.connect().then(startExpressApp).catch(bootupSequenceFailed);
