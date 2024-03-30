import React, { useEffect } from "react"; // Importez React et useEffect depuis le module 'react'
import Logo from "../components/Logo"; // Importez le composant Logo depuis le chemin spécifié
import Footer from "../components/Footer"; // Importez le composant Footer depuis le chemin spécifié
import WelcomeBack from "../components/WelcomeBack"; // Importez le composant WelcomeBack depuis le chemin spécifié
import Account from "../components/Accounts"; // Importez le composant Account depuis le chemin spécifié
import Navbar from "../components/Navbar"; // Importez le composant Navbar depuis le chemin spécifié
import "./User.js"; // Importez la feuille de style 'User.js' (bien que cela semble inutilisé)

import { setUser } from "../stores/user.js"; // Importez la fonction 'setUser' depuis le magasin 'user.js'
import { useDispatch } from "react-redux"; // Importez le crochet 'useDispatch' depuis le module 'react-redux'

const User = () => {
  const dispatch = useDispatch(); // Initialisez une fonction de dispatch à l'aide du crochet 'useDispatch'
  const transactions = [ // Créez un tableau d'objets de transactions
    {
      id: 1,
      amount: 100,
      accountNumber: 123456789,
      description: "Dépôt",
      title: "Compte chèque",
      type: "deposit",
      category: "salary",
      note: "Salaire du mois de septembre",
    },
    {
      id: 2,
      amount: -50,
      accountNumber: 123456789,
      description: "Retrait",
      title: "Compte chèque",
      type: "withdrawal",
      category: "food",
      note: "Achat de nourriture",
    },
    {
      id: 3,
      amount: 100,
      accountNumber: 123456789,
      description: "Dépôt",
      title: "Compte épargne",
      type: "deposit",
      category: "salary",
      note: "Salaire du mois de septembre",
    },
  ];

  useEffect(() => { // Utilisez le crochet 'useEffect'
    console.log(localStorage); // Affichez le contenu de l'objet 'localStorage'
    if (localStorage.token) { // Vérifiez si un 'token' existe dans le 'localStorage'
      fetch("http://localhost:3001/api/v1/user/profile", { // Effectuez une requête HTTP à l'URL spécifiée
        method: "POST", // Utilisez la méthode POST
        headers: {
          Authorization: `Bearer ${localStorage.token}`, // Définissez l'en-tête 'Authorization' avec la valeur du token
        },
        body: null, // Aucun corps de requête n'est fourni
      })
        .then((response) => response.json()) // Analysez la réponse en tant que JSON
        .then((data) => {
          console.log(data); // Affichez les données reçues du serveur
          dispatch(setUser(data.body)); // Envoyez l'action 'setUser' avec les données de l'utilisateur
        })
        .catch((error) => console.log(error)); // Gérez les éventuelles erreurs survenues lors de la requête
    } else {
      window.location = "/login"; // Redirigez vers la page de connexion si aucun token n'est trouvé
    }
  });

  return (
    <div>
      <Logo /> {/* Rendez le composant Logo */}
      <Navbar /> {/* Rendez le composant Navbar */}
      <main className="main bg-dark page-user">
        <WelcomeBack /> {/* Rendez le composant WelcomeBack */}
        {transactions.map((transaction) => {
          return <Account key={transaction.id} transaction={transaction} />; // Rendez le composant Account pour chaque transaction
        })}
      </main>
      <Footer /> {/* Rendez le composant Footer */}
    </div>
  );
};

export default User; // Exportez le composant User
