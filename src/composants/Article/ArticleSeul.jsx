import React from "react";

import '../../assets/css/article/article.css'

import logo from '../../assets/img/Logo.PNG'

function ArticleSeul(props) {

  return (
    <div className="article-solo"> 
        <img src={logo} alt="img-nesri" width="75%"></img>
        <p>{props.desc}</p>
        { props.promo === "false" ? null : <p>{props.promo}</p> }
        { props.promo === "false" ? <p>{props.prix}</p> : <p style={{textDecoration: 'line-through'}}>{props.prix}</p>}
    </div>
  );
}

export default ArticleSeul;