var express = require("express");
var db = require("../models");
var router = express.Router();

// router.get("/", (req, res)=>{
// 	// db.Customer.findAll({}).then((data)=>{
// 	// 	console.log(data);
// 	// 	res.render("index", {customers: data});
// 	// });
// 	console.log('Cust 1');
// 	db.Customer.findAll({}).then(function(results) {
// 		console.log('Cust 2');
//         res.render("options", {pancakes: results});
//     });
// });

router.post("/", function(req, res) {
    db.Customer.create({
        "name": req.body.customerName
    }).then(function() {
        res.redirect("/");
    });   
});

module.exports = router;
