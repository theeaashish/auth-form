import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import MainPage from "./components/MainPage";

const App = () => {
  const user = localStorage.getItem("token");

  return (
    <div className="bg-[var(--primary-bg)]">
      <Routes>
        {user && <Route path="/" exact element={<MainPage />} />}
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
