import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import PublicRoute from "./utils/PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Home from "./pages/shared/Home";
import Signup from "./pages/shared/Signup";
import Login from "./pages/shared/Login";

import Layout from "./pages/users/Layout";
import LayoutVendor from "./pages/vendors/LayoutVendor";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/signup" component={Signup} />

        <PrivateRoute path="/user" component={Layout} />
        <PrivateRoute path="/vendor" component={LayoutVendor} />

        {/* Error 404 - Page Not Found */}
        {/* <Route path="*" component={Error404} /> */}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
