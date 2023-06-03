const MYSQL = require("mysql");

var MYSQLCONNECTION = MYSQL.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password :'JoeRoot123',
    database : 'dacmarch23',
    port : 3306
});

MYSQLCONNECTION.connect(function(err){

    if(err){
        console.log("Failure In Connection : " +JSON.stringify(err));
    }
    else{
        console.log("Congratulations ! Connection Successful !");
    }

})

module.exports = MYSQLCONNECTION;

