import React from "react";
import jwt from "jwt-decode";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute(props) {
  const isAuth = window.sessionStorage.AccessToken;
  const user = jwt(isAuth)

  if (user.iat * 1000 < Date.now()) {
    console.log("i am in if props")
    return <Outlet {...props} />
  }
  else{
    console.log("i am in else props")
    return<Navigate  to="/" />;
  }
  // return isAuth
  //   ? <Route {...props} />
  //   : <redirect to="/" />;
}

export default PrivateRoute;