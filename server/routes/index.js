const express = require("express");
const router = express.Router();
const User = require("../models/User");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/trainers", (req, res, next) => {
  User.find({role: 'trainer'}).then(trainers => {
    res.json(trainers);
  });
});

module.exports = router;
