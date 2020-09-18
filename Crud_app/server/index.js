const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES

//create employee data

app.post("/employees", async (req, res) => {
  try {
    //console.log(req.body);
    const { emp_id, fname, lname, birth_day, sex, salary } = req.body;
    const newEmployees = await pool.query(
      "INSERT INTO employee (emp_id , fname , lname , birth_day , sex , salary) VALUES($1, $2, $3, $4, $5, $6)",
      [emp_id, fname, lname, birth_day, sex, salary]
    );

    res.json(newEmployees[0]);
  } catch (error) {
    console.error(err.message);
  }
});

//get all employees data

app.get("/employees", async (req, res) => {
  try {
    const getEmployees = await pool.query("SELECT * FROM employee");

    res.json(getEmployees.row);
  } catch (error) {
    console.error(err.message);
  }
});

//get a single employee data

app.get("/employees", async (req, res) => {
  try {
    const { emp_id } = req.params;
    const getOne = await pool.query(
      "SELECT * FROM employee WHERE emp_id = $1",
      [emp_id]
    );

    res.json(getOne.row);
  } catch (error) {
    console.error(err.message);
  }
});

//update an employee data

app.put("/employees", async (req, res) => {
  try {
    const { emp_id } = req.params;
    const { fname, lname, birth_day, sex, salary } = req.body;
    const updateEmployee = await pool.query(
      "UPDATE employee SET fname = $1, lname = $2, birth_day = $3, sex = $4, salary = $5 WHERE emp_id =$6",
      [fname, lname, birth_day, sex, salary, emp_id]
    );

    res.json("employees were updated");
  } catch (error) {
    console.error(err.message);
  }
});

//delete an employee

app.delete("/employees", async (req, res) => {
  try {
    const { emp_id } = req.params;

    const deleteEmployee = await pool.query(
      "DELETE FROM employee WHERE emp_id = $1",
      [emp_id]
    );

    res.json("employees were deleted");
  } catch (error) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
