import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword ";
import CreatePin from "./pages/Auth/CreatePin";
import CreateNewPasswords from "./pages/Auth/CreateNewPasswords";
import ConfirmOTP from "./pages/Auth/ConfrimOTP";
import { AuthProvider } from "./contexts/authContext";
import PrivateRoute from "../PrivateRoute";
import RoutesLink from "./pages/Dashboard/RoutesLink";

function App() {
  return (
    <AuthProvider>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/createPin" element={<CreatePin />} />
            <Route path="/createNewPassword" element={<CreateNewPasswords />} />
            <Route path="/confirmOTP" element={<ConfirmOTP />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard/*" element={<RoutesLink />} />
            </Route>
          </Routes>
        </>
      </Router>
    </AuthProvider>
  );
}

export default App;
