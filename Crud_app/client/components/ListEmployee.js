import React, { Fragment, useEffect, useState } from "react";
import EditEmployee from "./EditEmployee";

const ListEmployee = () => {
  const [empl, setEmpl] = useState([]);

  //delete employees
  const deleteEmployees = async (e_id) => {
    try {
      const deleteEmployees = await fetch(
        `http://localhost:5000/employee/${e_id}`,
        {
          method: "DELETE",
        }
      );
      setEmpl(empl.filter((employee) => employee.emp_id !== e_id));
    } catch (err) {
      console.error(err.message);
    }
  };
  const getEmployee = async () => {
    try {
      const response = await fetch(`http://localhost:5000/employee`);
      const jsonData = response.json();

      setEmpl(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getEmployee();
  }, []); //1 request
  return (
    <Fragment>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>emp_id</th>
            <th>fname</th>
            <th>lname</th>
            <th>birth_day</th>
            <th>sex</th>
            <th>salary</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {empl.map((employee) => (
            <tr key={employee.emp_id}>
              <td>{employee.fname}</td>
              <td>{employee.lname}</td>
              <td>{employee.birth_day}</td>
              <td>{employee.sex}</td>
              <td>{employee.salary}</td>
              <td>
                <EditEmployee employee={employee} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployees(employee.emp_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListEmployee;
