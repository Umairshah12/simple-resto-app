import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
    };
  }

  // changeState = () => {
  //   this.setState({
  //     login: !this.state.login,
  //   });
  // };

  Login = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        "http://localhost:3004/login?q=" + this.state.name
      );
      const data = await res.json();
      if (data.length > 0) {
        localStorage.setItem("login", JSON.stringify(data));
        this.props.onSubmit();
        this.props.history.push("/list");
        toast("User Login Successfully!", {
          type: "success",
        });
      } else {
        toast("Opps! An error occured", {
          type: "error",
        });
      }
    } catch (error) {
      //   console.log("error", error);
      toast("Opps! An error occured", {
        type: "error",
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>

        <div className="container">
          <div className="col-md-12">
            <form onSubmit={this.Login}>
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      onChange={(event) => {
                        this.setState({ name: event.target.value });
                      }}
                      type="text"
                      name="name"
                      value={this.state.name}
                      placeholder="Enter User Name..."
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      onChange={(event) => {
                        this.setState({ password: event.target.value });
                      }}
                      type="text"
                      name="password"
                      value={this.state.password}
                      placeholder="Enter password..."
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <Button type="submit" variant="outline-success">
                    Login
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
