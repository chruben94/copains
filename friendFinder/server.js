var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 8282;

//middleware that will pass post data for us and store it
//returns json and string text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//api route
require("./app/routing/api-routes")(app);
//home and survey html routes 
require("./app/routing/html-routes")(app);

app.listen(port, () => console.log("Listening on port", port));





