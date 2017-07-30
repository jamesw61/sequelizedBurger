var express = require("express");
var db = require("../models");
var router = express.Router();


router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(results) {
        res.render("index", {burgers: results});
    });
    // burger.selectAll(function(data) {    
    //   var hbsObject = {
    //     burgers: data
    //   };
    //   // res.render("index", hbsObject);
    //   res.render("index", {burgers: data});
    // });
});

router.post("/", function(req, res) {
    db.Burger.create({
        "name": req.body.name
    }).then(function() {
        res.redirect("/");
    });
    // burger.insertOne(["burger_name"], [req.body.name,], function() {
    //   res.redirect("/");
    // });
});

router.put("/:id", function(req, res) {
    // var condition = "id = " + req.params.id;
    db.Burger.update(
      {devoured: req.body.devoured},
      { where: { id: req.params.id }}
      ).then(() => {
        res.redirect("/");
    });

    // burger.updateOne({ devoured: req.body.devoured }, condition, function() {
    //     res.redirect("/");
    // });
});

router.delete("/:id", function(req, res) {
    // var condition = "id = " + req.params.id;
    // console.log(condition);
    // burger.deleteOne(condition, function() {
    //     res.redirect("/");
    // });
    db.Burger.destroy({
      where:{id: req.params.id}
    }).then(()=>{
      res.redirect("/");
    });
});

module.exports = router;