import React, { useEffect } from "react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import WelcomeBack from "../components/WelcomeBack";
import Account from "../components/Accounts";
import Navbar from "../components/Navbar";
import "./User.js";
import { setUser } from "../stores/user.js";
import { useDispatch } from "react-redux";
const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.token) {
    fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
        Authorization: `Bearer ${localStorage.token}`,
        },
        body: null,
    })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        dispatch(setUser(data.body));
        })
        .catch((error) => console.log(error));
    } else {
    window.location = "/login";
    }
  });
  return (
    <div>
      <Logo />
      <Navbar />
      <WelcomeBack />
      <Account />
      <Footer />
    </div>
  );
};

export default User;
