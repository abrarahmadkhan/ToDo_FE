import jwt from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = () => {
  const isAuth = window.sessionStorage.AccessToken;
  console.log(
    "🚀 ~ file: PrivateRoutes.js ~ line 5 ~ PrivateRoutes ~ isAuth",
    isAuth
  );
  if (isAuth !== undefined) {
    const user = jwt(isAuth);
    // console.log("🚀 ~ file: PrivateRoutes.js ~ line 11 ~ PrivateRoutes ~ user", user)
    
    // console.log("🚀 ~ file: PrivateRoutes.js ~ line 13 ~ PrivateRoutes ~ Date.now()", Date.now())
    // console.log("🚀 ~ file: PrivateRoutes.js ~ line 11 ~ PrivateRoutes ~ user", ((user.iat * 1000)+6000) )
    if (((user.iat * 1000)+990000) > Date.now()) {
      console.log("i am in if time left")
      return <Outlet />;
    }
    else {
      window.sessionStorage.clear();
      console.log("i am in else time Expired")
      return  <Navigate to="/" />;
    }
  } else {
    window.sessionStorage.clear();
    console.log("i am in else time Expired")
    return  <Navigate to="/" />;
  }
};
export default PrivateRoutes;
