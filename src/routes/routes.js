import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "../routes/login";
import SignUp from "./signUp";
import Main from "./main";

const Router = () => {
  return (
    <BrowserRouter>
      <Main />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
