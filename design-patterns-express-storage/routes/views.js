const express = require("express");
const path = require("path");

const router = express.Router();

router.use("/", express.static(path.join(__dirname, "../views")));
router.use("/contato", express.static(path.join(__dirname, "../views/contato.html")));
router.use("/filme", express.static(path.join(__dirname, "../views/filme.html")));

module.exports = router;
