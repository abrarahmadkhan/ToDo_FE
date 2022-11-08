import "./App.css";
import SignUp from "./pages/SigUp/Sigup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signInSide/SigIn";
import HomePage from "./pages/HomePage/HomePage";
import JobSubmitForm from "./pages/CreateJob/CreateJob";
import PrivateRoutes from "./components/Auth/PrivateRoutes";
// import PrivateRoute from "./components/Auth/Session";
// import PrivateRoute from "./components/Auth/Session.guard";
// import cors from 'cors';

function App() {
  // App.use(cors());
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} exact />
        <Route element={<PrivateRoutes />} >
          <Route path="/home" element={<HomePage />} exact />
          <Route exact path="/signup" element={<SignUp />}  />
          <Route path="/form" element={<JobSubmitForm />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;