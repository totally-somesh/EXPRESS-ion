const express = require("express");
const app = express();
const bodyparser = require("body-parser");
var path = require("path");
const router = require("./router/routers");

app.use(bodyparser.urlencoded({extended : false}));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname,"public")));

app.use("/", router);

app.listen(3007,function(){

    console.log(" -: Server Started & Running On Port : 3007 :- ");
})

module.exports = app;



