const mysql = require("mysql");

const myconnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "JoeRoot123",
  database: "test",
  port: 3306,
});

myconnection.connect((err) => {
  if (err) {
    console.log("---< Error In DB Connect >--- " + JSON.stringify(err));
  } else {
    console.log("---< Boss, Connection Masttt Hai ! >--- ");
  }
});

module.exports = myconnection;
