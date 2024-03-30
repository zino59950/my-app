import React, { useState } from "react";
import "./main.css"; // Importez votre fichier main.css en utilisant un chemin relatif

const Account = ({ transaction }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          {transaction.title} ({transaction.accountNumber})
        </h3>
        <p className="account-amount">${transaction.amount}</p>
        <p className="account-amount-description">{transaction.description}</p>
        {isOpen && <div>
          <p>Transaction: {transaction.type}</p>
          <p>Category: {transaction.category}</p>
          <p>Note: {transaction.note}</p>
        </div> }
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button" onClick={() => setIsOpen(!isOpen)}>View transactions</button>
      </div>
    </section>
  );
};

export default Account;
