import React from "react";

import Header from "../composants/Header";
import Footer from "../composants/Footer";
import ProfilContainer from "../composants/Profil/ProfilContainer";

function Profil() {
  return (
    <div>
        <Header active="account" />
        <ProfilContainer />
        <Footer />
    </div>
  );
}

export default Profil;