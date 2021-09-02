import React from "react";

import '../assets/css/footer.css'

function Footer() {

  return (
    <div className="footer">      
       <div>
           <p>Nesri Discount</p>
           <p>98 Boulevard de Ménilmontant 75020 Paris</p>
           <p>Tel: +33 1 43 66 19 31</p>
           <p>Email: contact@nesridiscount.com</p>
       </div>
       <div>
            <i class="fab fa-facebook footer-picto"></i>
            <i class="fab fa-instagram footer-picto"></i> 
            <i class="fab fa-twitter footer-picto"></i>       
        </div>
       <div>
           <p>Informations société</p>
           <br />
           <p>Fax: 01 46 36 55 44</p>
           <p>Siret: 439 912 916 00012</p>
           <p>TVA Intra-communautaire: FR 22 439 912 916</p>
           <p>IBAN: FR23 2004 1000 0151 7225 6Y02 053</p>
           <p>BIC: PSSTFRPPPAR</p>
       </div>
    </div>
  );
}

export default Footer;