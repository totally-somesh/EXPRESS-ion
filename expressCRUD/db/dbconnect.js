const mysql = require("mysql");

const mysqlconnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "JoeRoot123",
  database: "test",
  port: 3306,
});

mysqlconnection.connect((err) => {
  if (err) {
    console.log(
      " ----< Boss, Connection Problem ! >---- " + JSON.stringify(err)
    );
  } else {
    console.log(
      " ----< Boss, Connection Ekdam Takatak Hai ! Aap Khali Bhidd Jaao ! >---- "
    );
  }
});

module.exports = mysqlconnection;
