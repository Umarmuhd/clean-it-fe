import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { getToken, getRole, removeUserSession } from "../../utils/Common";
import axios from "../../axios";

import Sidebar from "../../components/users/Sidebar";

import Dashboard from "./Dashboard";
import Order from "./Order";
import UserComplain from "./UserComplain";
import UserProfile from "./UserProfile";
import SavedAddress from "./SavedAddress";
import RequestService from "./RequestService";

function Layout() {
  let history = useHistory();
  const [authloading, setAuthloading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const authToken = getToken();
    const role = getRole();

    //Log user out
    if (!authToken) return;

    // //Log user out when user tried vendor
    if (role !== "UAuthToken") {
      removeUserSession();
      setAuthloading(false);
      history.push("/login");
    }

    const url = `/auth/me`;
    axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };

    const fetchUser = async () => {
      await axios
        .get(url)
        .then((response) => {
          setUser(response.data);
          setAuthloading(false);
        })
        .catch((error) => {
          console.log(error);
          removeUserSession();
          setAuthloading(false);
        });
    };

    fetchUser();
  }, [history]);

  const handleLogout = () => {
    removeUserSession();
    history.push("/login");
  };

  if (authloading && getToken()) {
    return (
      //bouncing balls
      <div className="flex items-center justify-center">
        <div className="bouncer-container">
          <div className="bouncer">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Sidebar handleLogout={handleLogout} />

      <>
        <Switch>
          <Route path={`/user/dashboard`}>
            <Dashboard user={user} />
          </Route>
          <Route path={`/user/request-service`}>
            <RequestService user={user} />
          </Route>
          <Route path={`/user/order`}>
            <Order user={user} />
          </Route>
          <Route path={`/user/complain`}>
            <UserComplain user={user} />
          </Route>
          <Route path={`/user/profile`}>
            <UserProfile />
          </Route>
          <Route path={`/user/saved-address`}>
            <SavedAddress user={user} />
          </Route>

          <Redirect from="*" to="/user/dashboard" />
        </Switch>
      </>
    </>
  );
}

export default Layout;
