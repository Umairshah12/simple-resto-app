import React, { Component } from "react";
import { ProductContext } from "./context";
import { Table } from "react-bootstrap";
// import { ProductContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export default class ResturantSearch extends Component {
  static contextType = ProductContext;

  render() {
    return (
      <div>
        <br />
        <h1>Resturant Search</h1>
        <br />
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    onChange={this.context.searchHandle}
                    type="text"
                    placeholder="Add Resturant Name..."
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            {this.context.searchData ? (
              <div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Rating</th>
                      <th>Address</th>
                      <th>Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.context.searchData.map((item) => (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.rating}</td>
                        <td>{item.address}</td>
                        <td>
                          <Link to={"/update/" + item.id}>
                            <FontAwesomeIcon icon={faEdit} className="mx-1" />
                          </Link>
                          <span
                            onClick={() => {
                              this.context.delete(item.id);
                            }}
                          >
                            <FontAwesomeIcon icon={faTrash} color="red" />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            ) : (
              ""
            )}
            {this.context.noData ? <h3>No Result Found!</h3> : null}
          </div>
        </div>
      </div>
    );
  }
}
