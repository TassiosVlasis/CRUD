import React, { Fragment, useState } from "react";

const InputEmployee = () => {
  const [empl, setEmpl] = useState(""); //[state, change state] = state to show our default value

  //submit our form to send data out
  const onSubmitForm = async (e) => {
    e.preventDefault(); //it will send an event but we dont want to refresh
    try {
      //building package empl
      const body = { empl };
      //send request to add data
      const response = await fetch("http://localhost:5000/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      //console.log(response);
      window.location = "/"; //for refresh the changes
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Add an Employee</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={empl}
          onChange={(e) => setEmpl(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputEmployee;
