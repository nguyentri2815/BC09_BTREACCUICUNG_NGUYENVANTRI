import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/DashBoard/index";
import AddUser from "./views/DashBoard/AddUser";
import EditUser from "./views/DashBoard/EditUser";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
