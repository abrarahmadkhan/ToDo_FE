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
    if (user.iat * 1000 < Date.now()) {
      return <Outlet />;
    }
  } else {
    return  <Navigate to="/" />;
  }
};
export default PrivateRoutes;
