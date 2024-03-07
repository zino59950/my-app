import React from 'react';
import argentBankLogo from './argentBankLogo.png'; // Importez l'image
import "./main.css"; // Importez votre fichier main.css en utilisant un chemin relatif
const Logo = () => {
    return (
        <div className="logo">
            <img src={argentBankLogo} alt="Logo Argent Bank" /> {/* Utilisez l'image importée ici */}
        </div>
    );
};

export default Logo;
