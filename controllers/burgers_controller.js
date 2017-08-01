var express = require("express");
var db = require("../models");
var router = express.Router();


router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(results) {
        res.render("index", { bacon: results });
    });
});

router.post("/", function(req, res) {
    db.Burger.create({
        "name": req.body.name
    }).then(function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    db.Burger.update({ devoured: req.body.devoured }, { where: { id: req.params.id } }).then(() => {
        res.redirect("/");
    });
});

router.delete("/:id", function(req, res) {
    db.Burger.destroy({
        where: { id: req.params.id }
    }).then(() => {
        res.redirect("/");
    });
});



module.exports = router;