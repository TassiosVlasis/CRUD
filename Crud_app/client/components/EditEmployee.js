import React, { Fragment, useState } from "react";

const EditEmployee = ({ employee }) => {
  const [empl, setEmpl] = useState(employee.empl);

  //update employee

  const updateEmployee = async (e) => {
    e.preventDefault();
    try {
      const body = { empl };
      const response = await fetch(
        `http://localhost:5000/employee/${employee.emp_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#emp_id${employee.emp_id}`}
      >
        Edit
      </button>
      <div class="modal" emp_id={`emp_id${employee.emp_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Employee</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={empl}
                onChange={(e) => setEmpl(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateEmployee(e)}
              >
                Edit
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditEmployee;
