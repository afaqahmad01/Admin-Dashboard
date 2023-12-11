import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ForgetPassword from "./components/ForgetPassword";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginForm />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user/:userId" element={<UserDetails />} />{" "}
        {/* Route for UserDetails */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
