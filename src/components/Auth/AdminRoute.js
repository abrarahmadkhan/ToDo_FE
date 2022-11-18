import jwt from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";
const AdminRoutes = () => {
  const isAuth = window.sessionStorage.AccessToken;
  console.log(
    "🚀 ~ file: PrivateRoutes.js ~ line 5 ~ PrivateRoutes ~ isAuth",
    isAuth
  );
  if (isAuth !== undefined) {
    const user = jwt(isAuth);
    
    if (user.Position === "Admin") {
      console.log("i am in if time left")
      return <Outlet />;
    }
    else {
      console.log("i am in else user is not admin")
      return<Navigate to="/home"/>;
    }
  } else {
    window.sessionStorage.clear();
    console.log("i am in else time Expired")
    return  <Navigate to="/" />;
  }
};
export default AdminRoutes;





