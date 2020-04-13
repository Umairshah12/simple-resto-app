import React from "react";
import { Redirect, Route } from "react-router-dom";

const Protected = ({ component: Comp, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("login") ? (
        <Comp {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  ></Route>
);
export default Protected;
