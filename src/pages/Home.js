import React from "react";
import Login from "../components/Login";
import Banner from "../components/Banner";
import Logo from "../components/Logo";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "./Pages.css"
const Home = () => {
  return (
    <div>
      <Logo />
      <Login />
      <Banner />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
