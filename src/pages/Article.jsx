import React from "react";

import Header from "../composants/Header";
import ArticleContainer from "../composants/Article/ArticleContainer";
import Footer from "../composants/Footer";

function Article() {
  return (
    <div>
        <Header active="home" />
        <ArticleContainer cat={sessionStorage.getItem('cat')} />
        <Footer />
    </div>
  );
}

export default Article;