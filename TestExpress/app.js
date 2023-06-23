const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));

app.use(function(req,resp,next){

    next();
});

app.get("/home",function(req,resp){

    resp.send("<h1>Hello, This Is Somesh Prem, Live From Planet Earth !</h1>");

});

app.get("/aboutus",function(req,resp){

    resp.send("<h1>Hello, This Is Somesh Prem, At About Us Page</h1>");

});

app.listen(3007,function(){

    console.log(" -----< Boss ! Server Is Starting Up & Running On Port : 3007 >----- ");

})
