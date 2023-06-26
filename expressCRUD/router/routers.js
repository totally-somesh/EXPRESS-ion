const express = require("express");
const router = express.Router();

const connect = require("../db/dbconnect");

router.get("/employees", function (request, response) {
  connect.query("select * from employee", (err, data) => {
    if (err) {
      response
        .status(500)
        .send(" ---< Problem In 1st Router Method >--- " + JSON.stringify(err));
    } else {
      response.render("index", { empdata: data });
    }
  });
}); //end of employees method

router.get("/displayaddform", function (request, response) {
  response.render("addemp");
});

router.post("/insertEmployee", function (request, response) {
  var empid = request.body.empid;
  var ename = request.body.ename;
  var sal = request.body.sal;

  connect.query(
    "insert into employee values(?,?,?)",
    [empid, ename, sal],
    (err, results) => {
      if (err) {
        response
          .status(500)
          .send(
            "---< Problem In 3rd Router Method (Insert Method )>--- " +
              JSON.stringify(err)
          );
      } else {
        response.redirect("/employees");
      }
    }
  );
});

router.get("/edit/:eid", function (request, response) {
  // var empid = request.params.eid;
  connect.query(
    "select * from employee where empid = ?",
    [request.params.eid],
    (err, data) => {
      if (err) {
        response
          .status(500)
          .send(" ---< Error In 4th Router Method >--- " + JSON.stringify(err));
      } else {
        response.render("updateemp", { emp: data[0] });
      }
    }
  );
});

router.post("/updateemployeeform", function (request, response) {
  var empid = request.body.empid;
  var ename = request.body.ename;
  var sal = request.body.sal;

  connect.query(
    "update employee set ename = ?, sal = ? where empid = ?",
    [ename, sal, empid],
    (err, data) => {
      if (err) {
        response
          .status(500)
          .send("---< Error In 4th Router Method >--- " + JSON.stringify(err));
      } else {
        response.redirect("/employees");
      }
    }
  );
}); //end of update method

router.get("/delete/:eid", function (request, response) {
  var empid = request.params.eid;

  connect.query("delete from employee where empid=?", [empid], (err, data) => {
    if (err) {
      response
        .status(500)
        .send("---< Error In 5th Router Method >--- " + JSON.stringify(err));
    } else {
      response.redirect("/employees");
    }
  });
});

router.get("/sortBySal", function (request, response) {
  connect.query("select * from employee order by sal", (err, data) => {
    if (err) {
      response
        .status(500)
        .send("---< Error In 6th Router Method >--- " + JSON.stringify(err));
    } else {
      response.render("e", { empdata: data });
    }
  });
});

router.get("/sortByName", function (request, response) {
  connect.query("select * from employee order by ename", (err, data) => {
    if (err) {
      response
        .status(500)
        .send("---< Error In 7th Router Method >--- " + JSON.stringify(err));
    } else {
      response.render("ename", { empdata: data });
    }
  });
});

module.exports = router;
