var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {    
    var hbsObject = {
      burgers: data
    };
    // res.render("index", hbsObject);
    res.render("index", {burgers: data});

  });
});

router.post("/", function(req, res) {
  // burger.insertOne(["burger_name", "devoured"], [req.body.name, false], function() {
  burger.insertOne(["burger_name"], [req.body.name,], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne( {devoured: req.body.devoured}, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log(condition);
  burger.deleteOne(condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
