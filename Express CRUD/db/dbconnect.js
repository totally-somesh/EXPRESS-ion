const mysql = require("mysql");

var myConnection = mysql.createConnection({

    host : "127.0.0.1",
    user : "root",
    password : "root123",
    database : "test",
    port : 3306
})

myConnection.connect((err)=>{
if(err)
    console.log("Error Occurred !!! " + JSON.stringify(err));
})

module.exports = myConnection;

