import React, { Component } from "react";
// import { ProductConsumer } from "./context";
import { Table } from "react-bootstrap";
// import { ProductContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default class ResturantList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3004/resturant").then((response) => {
      response.json().then((res) => {
        this.setState({ list: res });
      });
    });
  }

  delete(id) {
    // console.log("deleted");
    const data = this.state.list.filter((item) => item.id !== id);
    this.setState({
      list: data,
    });
    fetch("http://localhost:3004/resturant/" + id, {
      method: "DELETE",
    }).then((response) => {
      response.json().then((res) => {
        toast(" Resturant Deleted Successfully!", {
          type: "success",
        });
      });
    });
  }

  // static contextType = ProductContext;
  render() {
    return (
      <div>
        <h1>Resturent List</h1>
        <br />
        {this.state.list ? (
          <div className="container">
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
                {this.state.list.map((item) => {
                  return (
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
                            this.delete(item.id);
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} color="red" />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>loading please wait</p>
        )}
      </div>
    );
  }
}
