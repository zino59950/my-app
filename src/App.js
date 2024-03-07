import React from "react";
// Importe BrowserRouter, Routes, et Route depuis 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
