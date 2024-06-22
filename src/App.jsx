import React from "react";
import Home from "./routes/home/Home";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import Users from "./components/users/Users";
import "./scss/main.scss";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </>
  );
};

export default App;
