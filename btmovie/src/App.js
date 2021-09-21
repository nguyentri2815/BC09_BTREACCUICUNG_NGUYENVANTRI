import React, { Component } from "react";
import Detail from "./views/Detail";
import Home from "./views/Home";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMe } from "./store/actions/auth";
import { AuthRoute, PrivateRoute } from "./HOCs/Route";
import Profile from "./views/Profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/detail/:id" component={Detail} />
          <Route path="/profile" component={Profile} />
          <PrivateRoute exact path="/" component={Home} redirectPath="/signin" />
          <AuthRoute path="/signin" component={Signin} redirectPath="/" />
          <AuthRoute path="/signup" component={Signup} redirectPath="/" />
        </Switch>
      </BrowserRouter>
    );
  }
  componentDidMount() {
    const token = localStorage.getItem("t");
    if (token) this.props.dispatch(fetchMe);
  }
}

export default connect()(App);
