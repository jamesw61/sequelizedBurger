var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 3006;
var app = express();
var db = require("./models");
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers");
var burgerRoutes = require("./controllers/burgers_controller.js");
var customerRoutes = require("./controllers/customer_controller.js");

// app.use("/", routes);
app.use("/", burgerRoutes);
app.use("/customer/", customerRoutes);





db.sequelize.sync(
	// { force: true }
	).then(function() {
  app.listen(port, function() {
    console.log("App listening on " + port);
  });
});
