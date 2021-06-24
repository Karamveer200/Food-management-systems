const controller = require("../controller/food.controller");

let router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json("Welcome to the Employee api route");
});

module.exports = router;
