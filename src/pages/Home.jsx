import React from "react";

import Header from "../composants/Header";
import HomeContainer from "../composants/Home/HomeContainer";
import Footer from "../composants/Footer";

function Home() {
  return (
    <div>
        <Header active="home" />
        <HomeContainer />
        <Footer />
    </div>
  );
}

export default Home;