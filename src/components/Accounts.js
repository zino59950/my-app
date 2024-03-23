import React from "react";
import "./main.css"; // Importez votre fichier main.css en utilisant un chemin relatif

const Account = ({ transaction }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          {transaction.title} ({transaction.accountNumber})
        </h3>
        <p className="account-amount">${transaction.amount}</p>
        <p className="account-amount-description">{transaction.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;
