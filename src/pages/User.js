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
  const transactions = [
    {
      id: 1,
      amount: 100,
      accountNumber: 123456789,
      description: "Deposit",
      title: "Checking Account",
    },
    {
      id: 2,
      amount: -50,
      accountNumber: 123456789,
      description: "Withdrawal",
      title: "Checking Account",
    },
    {
      id: 3,
      amount: 100,
      accountNumber: 123456789,
      description: "Deposit",
      title: "Savings Account",
    },
  ];
  useEffect(() => {
    console.log(localStorage);
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
      <main className="main bg-dark page-user">
        <WelcomeBack />
        {transactions.map((transaction) => {
          return <Account key={transaction.id} transaction={transaction} />;
        })}
      </main>
      <Footer />
    </div>
  );
};

export default User;
