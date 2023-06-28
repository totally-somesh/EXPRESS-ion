const express = require("express");
const router = express.Router();
const myconnection = require("../db/dbconnect");

router.get("/employees", function (request, response) {
  myconnection.query("select * from employee", (err, data) => {
    if (err) {
      response
        .status(500)
        .send("---< Error In 1st Method >---" + JSON.stringify(err));
    } else {
      response.send(data);
    }
  });
}); //end of get method

router.get("/employee/employees/:eid", function (request, response) {
  myconnection.query(
    "select * from employee where empid=?",
    [request.params.eid],
    (err, data) => {
      if (err) {
        response
          .status(500)
          .send("---< Error In 2nd Method >---" + JSON.stringify(err));
      } else {
        response.send(data[0]);
      }
    }
  );
}); //end of 2nd method

router.post("/employee/employees/:eid", function (request, response) {
  var empid = request.body.empid;
  var ename = request.body.ename;
  var sal = request.body.sal;
  myconnection.query(
    "insert into employee values(?,?,?)",
    [empid, ename, sal],
    (err, data) => {
      if (err) {
        response
          .status(500)
          .send("---< Error In 3rd Method >---" + JSON.stringify(err));
      } else {
        if (data.affectedRows === 1) {
          response.send("{'MSG':'Employee Inserted Succesfully !'}");
        } else {
          response.send("{'MSG':'Employee Insertion Failed Miserably ! '}");
        }
      }
    }
  );
}); //end of 3rd Method

router.put("/employee/employees/:eid", function (request, response) {
  var empid = request.body.empid;
  var ename = request.body.ename;
  var sal = request.body.sal;

  myconnection.query(
    "update employee set ename=?, sal=? where empid = ?",
    [ename, sal, empid],
    (err, data) => {
      if (err) {
        response
          .status(500)
          .send("---< Error In 4th Method >---" + JSON.stringify(err));
      } else {
        console.log(data.affectedRows);
        if (data.affectedRows > 0) {
          response.send("{'MSG':'Employee Updated Succesfully !'}");
        } else {
          response.send("{'MSG':'Employee Updation Failed !'}");
        }
      }
    }
  );
}); //end of 4th method

router.delete("/employee/employees/:eid", function (request, response) {
  myconnection.query(
    "delete from employee where empid=?",
    [request.params.eid],
    (err, data) => {
      if (err) {
        response
          .status(500)
          .send("---< Error In 5th Method >---" + JSON.stringify(err));
      } else {
        if (data.affectedRows === 1) {
          response.send("{'MSG':'Employee Deleted Succesfully !'}");
        } else {
          response.send("{'MSG':'Employee Deletion Failed !'}");
        }
      }
    }
  );
}); //end of 5th method

module.exports = router;
