import React from 'react';
import './main.css';

const WelcomeBack = () => {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
    </main>
  );
};

export default WelcomeBack;
