import React, { useState } from "react"; // Importez React et useState depuis le module 'react'
import "./main.css"; // Importez la feuille de style 'main.css'
import { useSelector, useDispatch } from "react-redux"; // Importez le crochet 'useSelector' et 'useDispatch' depuis le module 'react-redux'
import { setUser } from "../stores/user.js"; // Importez la fonction 'setUser' depuis le magasin 'user.js'

const WelcomeBack = () => {
  const [isEdit, setIsEdit] = useState(false); // Initialisez l'état pour la modification du nom
  const [userName, setUserName] = useState(""); // Initialisez l'état pour le nom d'utilisateur
  const user = useSelector((state) => state.user.user); // Sélectionnez l'utilisateur à partir de l'état global
  const dispatch = useDispatch(); // Initialisez une fonction de dispatch à l'aide du crochet 'useDispatch'

  const save = (e) => {
    e.preventDefault(); // Empêchez le comportement par défaut du formulaire
    setIsEdit(false); // Désactivez le mode d'édition
    // Enregistrez le nouveau nom
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT", // Utilisez la méthode PUT
      headers: {
        "Content-Type": "application/json", // Définissez l'en-tête 'Content-Type' sur JSON
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Ajoutez le token d'autorisation
      },
      body: JSON.stringify({ userName }), // Convertissez le nom d'utilisateur en chaîne JSON
    })
      .then((res) => res.json()) // Analysez la réponse en tant que JSON
      .then((data) => {
        console.log(data); // Affichez les données reçues du serveur
        dispatch(setUser(data.body)); // Envoyez l'action 'setUser' avec les données de l'utilisateur
      });
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1 className="welcome">
          Bienvenue de retour
          <br />
          {user?.userName} !
        </h1>
        <button className="edit-button" onClick={() => setIsEdit(true)}>
          Modifier le nom
        </button>
        {isEdit && (
          <form className="edit-form" onSubmit={(e) => save(e)}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button type="submit">Enregistrer</button>
          </form>
        )}
      </div>
    </main>
  );
};

export default WelcomeBack; // Exportez le composant WelcomeBack