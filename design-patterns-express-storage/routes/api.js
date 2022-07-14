const express = require("express");
const cors = require("cors");

const router = express.Router();

const movies = require("../model/movies");

const corsOptions = {
  origin: "http://localhost:5000",
};

router.use("/", cors(corsOptions));

router.use("/movie", (req, res) => {
  let target = req.query.target;
  let movie = movies.searchMovie(target);
  res.send(movie);
});

module.exports = router;
