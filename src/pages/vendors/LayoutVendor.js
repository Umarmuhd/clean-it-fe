import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { getToken, getRole, removeUserSession } from "../../utils/Common";
import axios from "../../axios";

import Sidebar from "../../components/vendors/SidebarVendor";

import DashboardVendor from "./DashboardVendor";
import OrderVendor from "./OrderVendor";
import Pricing from "./Pricing";
import ProfileVendor from "./ProfileVendor";
import SavedAddressVendor from "./SavedAddressVendor";

function LayoutVendor() {
  let history = useHistory();
  const [authloading, setAuthloading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const authToken = getToken();
    const role = getRole();

    //Log user out
    if (!authToken) return;

    // //Log user out when user tried vendor
    if (role !== "VAuthToken") {
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
      <div className="bouncer-container">
        <div className="bouncer">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Sidebar handleLogout={handleLogout} />

      <>
        <Switch>
          <Route path={`/vendor/dashboard`}>
            <DashboardVendor user={user} />
          </Route>
          <Route path={`/vendor/order`}>
            <OrderVendor />
          </Route>
          <Route path={`/vendor/pricing`}>
            <Pricing user={user} />
          </Route>
          <Route path={`/vendor/profile`}>
            <ProfileVendor />
          </Route>
          <Route path={`/vendor/saved-address`}>
            <SavedAddressVendor user={user} />
          </Route>

          <Redirect from="*" to="/vendor/dashboard" />
        </Switch>
      </>
    </>
  );
}

export default LayoutVendor;
