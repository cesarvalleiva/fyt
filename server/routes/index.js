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

router.get("/trainer/:id", (req, res, next) => {
  User.findById(req.params.id)
  .then(trainer => {
    res.json(trainer);
  });
});

module.exports = router;
