import React, { Component } from "react";
// import { resturant } from "../db/db";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const ProductContext = React.createContext();
const initialState = {
  list: [],
  id: "",
  name: "",
  email: "",
  rating: "",
  address: "",
  searchData: "",
  noData: false,
  lastSearch: "",
};
export default class ProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleNameChange = this.handleNameChange.bind(this);
  }

  fetchHotel = (id) => {
    fetch("http://localhost:3004/resturant/" + id).then((response) => {
      response
        .json()
        .then((res) => {
          // console.log(res);
          this.setState({
            id: res.id,
            name: res.name,
            rating: res.rating,
            email: res.email,
            address: res.address,
          });
        })
        .catch((err) => {
          console.log("this is error", err.msg);
        });
    });
  };

  update = (e) => {
    e.preventDefault();
    fetch("http://localhost:3004/resturant/" + this.state.id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        rating: this.state.rating,
        address: this.state.address,
      }),
    }).then((response) => {
      response.json().then((res) => {
        toast("New Resturant Updated Successfully!", {
          type: "success",
        });
      });
    });
  };

  handleSubmit = async (event) => {
    // console.log(event);
    event.preventDefault();
    try {
      await fetch("http://localhost:3004/resturant", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          rating: this.state.rating,
          address: this.state.address,
        }),
      });

      toast("New Resturant Added Successfully!", {
        type: "success",
      });
      this.setState((prev) => ({
        ...initialState,
        list: prev.list,
      }));
    } catch (error) {
      toast("Opps! An error occured", {
        type: "error",
      });
    }
  };

  searchHandle = (evt) => {
    this.search(evt.target.value);
  };

  search(key) {
    // console.log(key);
    this.setState({ lastSearch: key });
    fetch("http://localhost:3004/resturant?q=" + key).then((response) => {
      response.json().then((res) => {
        // console.log(res);
        if (res.length > 0) {
          this.setState({ searchData: res, noData: false });
        } else {
          this.setState({ noData: true, searchData: false });
        }
      });
    });
  }

  handleNameChange = (evt) => {
    // console.log(evt.target.name);
    // console.log(evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  delete = (id) => {
    // console.log("deleted");
    const data = this.state.list.filter((item) => item.id !== id);
    this.setState({
      list: data,
    });
    console.log(data);
    fetch("http://localhost:3004/resturant/" + id, {
      method: "DELETE",
    }).then((response) => {
      response.json().then((res) => {
        this.search(this.state.lastSearch);
        toast(" Resturant Deleted Successfully!", {
          type: "success",
        });
      });
    });
  };

  render() {
    // console.log(this.state.list);
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
            // create: this.create,
            handleSubmit: this.handleSubmit,
            handleNameChange: this.handleNameChange,
            fetchHotel: this.fetchHotel,
            update: this.update,
            delete: this.delete,
            searchHandle: this.searchHandle,
            search: this.search,
          }}
        >
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
