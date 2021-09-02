import React from "react";

import '../../assets/css/bucket/bucket.css'

function BucketContainer() {

  return (
    <div className="bucket">      
       <div>
         <i class="far fa-shopping-bag"></i>
         <p>Mon Panier</p>
       </div>
        <br />
        <br />
        <br />
        <br />
        <p>Votre panier est actuellement vide</p>
        <br />
        <br />
        <br />
        <br />
       <button onClick={() => window.location.replace('/')}>Commencer mes achats</button>
       <span onClick={() => window.location.replace('/buy2')}>Remplir mon panier</span>
    </div>
  );
}

export default BucketContainer;