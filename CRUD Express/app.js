const express = require("express");
const APP = express();
const BODYPARSER = require("body-parser");
var path = require("path");
const ROUTER = require("./Router/router");

APP.use(BODYPARSER.urlencoded({extended : false}));

APP.set("views",path.join(__dirname,"views"));
APP.set("view engine","ejs");
APP.set(express.static(path.join(__dirname,"public")))
//to find all static css and js folder
APP.use("/css",express.static(path.resolve(__dirname,"public/css")))
APP.use("/js",express.static(path.resolve(__dirname,"public/js")))
APP.use("/image",express.static(path.resolve(__dirname,"public/images")))


APP.use("/",ROUTER);

APP.listen(3007,function(){

    console.log(" -: Server Started & Running On Port : 3007 :- ");
})

module.exports = APP;


