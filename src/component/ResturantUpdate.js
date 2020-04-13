import React, { Component } from "react";
// import { ProductConsumer } from "./context";
import { Button } from "react-bootstrap";
import { ProductContext } from "./context";
export default class ResturantUpdate extends Component {
  // static contextType;
  static contextType = ProductContext;

  componentDidMount() {
    if (this.props.match.params.id) {
      this.context.fetchHotel(this.props.match.params.id);
    }
  }
  render() {
    // console.log(this.context);
    return (
      <React.Fragment>
        <div>
          <h1>Update Resturant</h1>
          <form onSubmit={this.context.update}>
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
                        name="email"
                        value={this.context.email}
                        placeholder="Add Resturant Email..."
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
                        onChange={this.context.handleNameChange}
                        type="text"
                        name="rating"
                        value={this.context.rating}
                        placeholder="Add Resturant rating..."
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
                        onChange={this.context.handleNameChange}
                        type="text"
                        name="address"
                        value={this.context.address}
                        placeholder="Add Resturant address..."
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <Button type="submit" variant="outline-success">
                      Update Resturant
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
