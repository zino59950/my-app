import React from "react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import "./Pages.css";
import FormLogin from "../components/FormLogin";
const Login = () => {
  return (
    <div>
      <Logo />
      <FormLogin />
      <Footer />
    </div>
  );
};

export default Login;
