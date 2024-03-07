import React from 'react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import WelcomeBack from '../components/WelcomeBack';
import Account from '../components/Accounts';
import Navbar from '../components/Navbar';
import"./User.js";

const User = () => {
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