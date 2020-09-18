import React, { Fragment } from "react";
import "./App.css";

//components

import InputEmployee from "./components/InputEmployee";
import ListEmployee from "./components/ListEmployee";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputEmployee />
        <ListEmployee />
      </div>
    </Fragment>
  );
}

export default App;
