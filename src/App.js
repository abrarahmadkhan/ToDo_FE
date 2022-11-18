import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signInSide/SignIn";
import HomePage from "./pages/HomePage/HomePage";
import JobSubmitForm from "./pages/CreateJob/CreateJob";
import PrivateRoutes from "./components/Auth/PrivateRoutes";
import SignUp from "./pages/SignUp/Signup";
import AccountPage from "./pages/AccountesList/Accountes";
import AdminRoutes from "./components/Auth/AdminRoute";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<HomePage />} exact />
          <Route path="/form" element={<JobSubmitForm />} exact />
          <Route path="/form/:id" element={<JobSubmitForm />} />
          <Route element={<AdminRoutes />}>
            <Route path="/account" element={<AccountPage />} exact />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
