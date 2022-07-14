const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = express.Router();

const corsOptions = {
  origin: "http://localhost:5000",
};

const model = require("../model/model");

const date = new Date();

let currentDay = date.getDate(),
  currentMonth = date.getMonth() + 1,
  currentYear = date.getFullYear(),
  dateInsert = `${currentDay}/${currentMonth}/${currentYear}`;

function responseSearch(data, res) {
  if (!data.length) res.send("<h1>Nenhum valor encontrado</h1>");
  else res.send(data);
}

function informationInsert(id, value, date, res) {
  model.insertValue(id, value, date);
  res.send({ message: "Dados salvos com sucesso" });
}

router.use("/", cors(corsOptions));

/* Insert API */

router.get("/new/:id&:value", (req, res) => {
  let id = req.params.id;
  let value = req.params.value;
  informationInsert(id, value, dateInsert, res);
});

router.get("/new", (req, res) => {
  let id = req.query.id;
  let value = req.query.value;
  informationInsert(id, value, dateInsert, res);
});

router.post("/new", bodyParser.json(), (req, res) => {
  let id = req.body.id;
  let value = req.body.value;
  informationInsert(id, value, dateInsert, res);
});

/* Search API */

router.get("/all", (req, res) => {
  let values = model.allValues();

  res.send(JSON.stringify(values));
});

router.get("/:key", (req, res) => {
  let value = model.searchValue(req.params.key);
  responseSearch(value, res);
});

router.get("/", (req, res) => {
  let value = model.searchValue(req.query.key);
  responseSearch(value, res);
});

router.get("/", bodyParser.urlencoded(), (req, res) => {
  /* INSONMIA TESTE */
  let value = model.searchValue(req.body.key);
  responseSearch(value, res);
});

router.post("/", bodyParser.json(), (req, res) => {
  let value = model.searchValue(req.body.key);
  responseSearch(value, res);
});

module.exports = router;
