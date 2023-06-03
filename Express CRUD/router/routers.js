const express = require("express");
const routers = express.Router();

const myConnection = require("../db/dbconnect");

routers.get("/employee", function(req, resp){

    myConnection.query("select * from employee", function(err,data,fields){

        if(err){
            resp.status(500).send("Error Occurred : " +JSON.stringify(err));
        }
        else{
            resp.render("index", {empdata : data});
        }
    });
}) // end of table display main function

routers.get("/form", function(req, resp){

    resp.render("form");

})

routers.get("/insertemp", function(req, resp){

    var EMPID = req.query.empid;
    var ENAME = req.query.ename;
    var SAL = req.query.sal;
    myConnection.query("insert into employee value(?,?,?)",[EMPID,ENAME,SAL],function(err, results){
        if(err){
        resp.status(500).send("Error Occurred : " +JSON.stringify(err));
    }
    else{
        resp.redirect("/employee");
    }})
    
}) // end of insert emp function()

routers.get("/edit/:eid", function(req, resp){

    var EID = req.params.eid;

    myConnection.query("select * from employee where empid = ?",[EID],function(err, data){

        if(err){
            resp.status(500).send("Error Occurred : " +JSON.stringify(err));
        }
        else{
            resp.render("updateEmp", {emp : data[0]});
        }
    })
}) // end of basic updation function()

routers.get("/updateEmp", function(req, resp){

    var EMPID1 = req.query.empid;
    var ENAME1 = req.query.ename;
    var SAL1 = req.query.sal;

    myConnection.query("update employee set ename = ?, sal = ? where empid = ?", [ENAME1, SAL1, EMPID1], function(err, data){

        if(err){
            resp.status(500).send("Error Occurred : " +JSON.stringify(err));
        }
        else{
            resp.redirect("/employee");
        }
    })
}) // end of updation function()

module.exports = routers;