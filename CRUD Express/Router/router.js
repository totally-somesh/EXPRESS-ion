const express = require("express");
const ROUTER = express.Router();
const MYSQLCONNECTION = require("../DB/dbconnect");

ROUTER.get("/employee",function(req, resp){

MYSQLCONNECTION.query("select * from em",function(err,data,fields){

    if(err){

        resp.status(500).send("Error Occurred : " + JSON.stringify(err));
    }
    else{

        resp.render("index", {empdata:data});
    }
})
}) //end of showing employee table URL

ROUTER.get("/displayaddpage",function(req, resp){

    resp.render("formpage");
})

ROUTER.get("/insertemp", function(req, resp){

    var eid = req.query.empid;
    var ename  = req.query.empname;
    var esal = req.query.empsal;

    MYSQLCONNECTION.query("insert into em values(?,?,?)",[eid,ename,esal],function(err,data){

        if(err){
            resp.status(500).send("Error Occurred : " +JSON.stringify(err));
        }
        else{
            resp.redirect("/employee");
        }
    })
}) //end of inserting employee URL

module.exports = ROUTER;
