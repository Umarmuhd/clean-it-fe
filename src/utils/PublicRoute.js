import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken, getRole } from "./Common";

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  const role = getRole();
  return (
    <Route
      {...rest}
      render={(props) =>
        !getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname:
                role === "UAuthToken" ? `/user/dashboard` : `/vendor/dashboard`,
            }}
          />
        )
      }
    />
  );
}

export default PublicRoute;
