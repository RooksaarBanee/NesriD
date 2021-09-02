import React from "react";

import Header from "../composants/Header";
import Footer from "../composants/Footer";
import BuyContainer from "../composants/Buy/BuyContainer";

function Buy() {
  return (
    <div>
        <Header active="shop" />
        <BuyContainer />
        <Footer />
    </div>
  );
}

export default Buy;