import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signInSide/SignIn";
import HomePage from "./pages/HomePage/HomePage";
import JobSubmitForm from "./pages/CreateJob/CreateJob";
import PrivateRoutes from "./components/Auth/PrivateRoutes";
import SignUp from "./pages/SignUp/Signup";
// import PrivateRoute from "./components/Auth/Session";
// import PrivateRoute from "./components/Auth/Session.guard";
// import cors from 'cors';

function App() {
  // App.use(cors());
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route element={<PrivateRoutes />} >
          <Route path="/home" element={<HomePage />} exact />
          <Route path="/form" element={<JobSubmitForm />} exact />
          <Route path="/form/:id" element={<JobSubmitForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
