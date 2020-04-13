import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export default class LogOut extends Component {
  render() {
    // console.log(this.props);
    localStorage.clear();
    this.props.onClick();
    toast("User logut Successfully!", {
      type: "success",
    });
    return (
      <div>
        <Redirect to="/login" />
      </div>
    );
  }
}
