// import React from "react";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import Home from "./component/Home";
import NavbarData from "./component/NavbarData";
import ResturantList from "./component/ResturantList";
import ResturantDetail from "./component/ResturantDetail";
import ResturantUpdate from "./component/ResturantUpdate";
import ResturantSearch from "./component/ResturantSearch";
import ResturantCreate from "./component/ResturantCreate";
import Login from "./component/Login";
import LogOut from "./component/LogOut";
import Protected from "./component/Protected";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  onSubmit = async () => {
    this.setState({ login: true });
  };

  onClick = async () => {
    this.setState({ login: false });
  };

  render() {
    // console.log(this.props);

    return (
      <div className="App">
        <React.Fragment>
          <Router>
            <NavbarData isLogin={this.state.login} />
            <Switch />
            {/* <Route exact path="/">
              <Home />
            </Route> */}

            <Protected exact path="/" component={Home} />
            <Protected exact path="/list" component={ResturantList} />
            <Protected exact path="/detail" component={ResturantDetail} />
            <Protected exact path="/update/:id" component={ResturantUpdate} />
            <Protected exact path="/search" component={ResturantSearch} />
            <Protected exact path="/create" component={ResturantCreate} />

            {/* <Route path="/list">
              <ResturantList />
            </Route> */}

            {/* <Route path="/detail">
              <ResturantDetail />
            </Route> */}

            {/* <Route
              path="/update/:id"
              render={(props) => <ResturantUpdate {...props} />}
            ></Route> */}

            <Route
              path="/login"
              render={(props) => <Login {...props} onSubmit={this.onSubmit} />}
            ></Route>

            {/* <Route exact path="/search">
              <ResturantSearch />
            </Route> */}
            {/* 
            <Route path="/create">
              <ResturantCreate />
            </Route> */}

            <Route
              path="/logout"
              render={(props) => <LogOut {...props} onClick={this.onClick} />}
            ></Route>
          </Router>
        </React.Fragment>
      </div>
    );
  }
}

export default withRouter(App);
