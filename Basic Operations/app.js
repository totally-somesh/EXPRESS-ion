//Importing Libraries
const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended : false}));

//Middleware 
app.use(function(req, resp, next){

    console.log("Requesting Middleware 1...");
    next();
})

//Middleware
app.use(function(req, resp, next){

    console.log("Requesting Middleware 2...");
    next();
})

//To specify pathname 
app.get("/entry", function(req, resp){
    resp.send("<h1>At Entry Page</h1>");
})

//Here, expressJS creates the server implicitly.
app.listen(3007, function(){
    console.log(" -: Server Started & Running On Port No : 3007 :- ");
});