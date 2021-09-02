import React from "react";

import '../../assets/css/buy/buy.css'

function BuyContainer() {

  return (
    <div className="buy">      
       <div className="buy-bigtitle">
         <i class="far fa-shopping-bag"></i>
         <p>Mon Panier</p>
       </div>
       <div className="buy-cat">
        <p className="buy-title">Multimédia & Communication</p>
        <div className="buy-subcat">
          <p>Enceinte Bluetooth - référence: 1099103</p>
          <div className="buy-price">
            <p>Prix</p>
            <p>109 €</p>
          </div>
        </div>
       </div>

       <div className="buy-cat">
        <p className="buy-title">Bricolage & Jardin</p>
        <div className="buy-subcat">
          <p>Tondeuze à Gazon KARCHER - référence: 1893103</p>
          <div className="buy-price">
            <p>Prix</p>
            <p>512 €</p>
          </div>
        </div>
       </div>

       <div className="buy-cat">
        <p className="buy-title">Camping & Loisirs</p>
        <div className="buy-subcat">
          <p>Tante Quechua - référence: 06895634</p>
          <div className="buy-price">
            <p>Prix</p>
            <p>221 €</p>
          </div>
        </div>
       </div>
        <div>
          <button onClick={() => window.location.replace('/')}>Commencer à payer</button>
        </div>
       <span onClick={() => window.location.replace('/buy')}>Vider mon panier</span>
    </div>
  );
}

export default BuyContainer;