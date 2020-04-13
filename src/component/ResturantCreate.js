import React, { Component } from "react";
// import { ProductConsumer } from "./context";
import { Button } from "react-bootstrap";
import { ProductContext } from "./context";

export default class ResturantCreate extends Component {
  static contextType = ProductContext;
  render() {
    // console.log(this.context)
    return (
      <React.Fragment>
        <h1>Create Resturant</h1>
        <br />
        <form onSubmit={this.context.handleSubmit}>
          <div className="container">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      onChange={this.context.handleNameChange}
                      type="text"
                      name="name"
                      value={this.context.name}
                      placeholder="Add Resturant Name..."
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      onChange={this.context.handleNameChange}
                      type="email"
                      name="email"
                      value={this.context.email}
                      placeholder="Add Resturant Email..."
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      onChange={this.context.handleNameChange}
                      type="text"
                      name="rating"
                      value={this.context.rating}
                      placeholder="Add Resturant rating..."
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      onChange={this.context.handleNameChange}
                      type="text"
                      name="address"
                      value={this.context.address}
                      placeholder="Add Resturant address..."
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <Button type="submit" variant="outline-success">
                    Add Resturant
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
