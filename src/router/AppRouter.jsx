import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Following from "../components/Following";
import Home from "../components/Home";
import LoginForm from "../components/LoginForm";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/followers" element={<Following />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
