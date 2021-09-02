import React from "react";

import '../../assets/css/profil/profil.css'

function ProfilContainer() {

  return (
    <div className="profil">      
       <p className="profil-bigtitle">Espace Client Nesri Discount</p>
       <div className="profil-all">
            <div className="profil-cat profil-ab-1">
                <p className="profil-title">J'ai un compte client</p>
                <input></input>
                <p>Email ou numéro de téléphone</p>
                <input></input>
                <p>Mot de passe oublié</p>
                <div className="profil-checked">
                    <input type="checkbox"></input>
                    <p>Resté connecté</p>
                </div>
                <button>Se connecter</button>
            </div>
            <span className="profil-ab-span"></span>
            <div className="profil-cat profil-ab-2">
                <p className="profil-title">Je n'ai pas de compte client ...</p>
                <input></input>
                <p>Pas de surnom</p>
                <input></input>
                <p>Email valide</p>
                <input></input>
                <p>6 caractères minimum (lettres majuscule, chiffres, caractères spéciaux)</p>
                <input></input>
                <p>Confirmé mot de passe</p>
                <button>Créer mon compte</button>
            </div>
       </div>
    </div>
  );
}

export default ProfilContainer;