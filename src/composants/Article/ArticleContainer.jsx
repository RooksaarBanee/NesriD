import React, { useState } from "react";

import '../../assets/css/article/article.css'
import ArticleSeul from "./ArticleSeul";

function ArticleContainer(props) {

  const [cat] = useState(props.cat)

  const allProduct = [
    {
      desc: 'Description Courte',
      prix: 'Prix',
      promo: 'false'
    },
    {
      desc: 'Description Courte',
      prix: 'Prix',
      promo: 'false'
    },
    {
      desc: 'Description Courte',
      prix: 'Prix',
      promo: '399€'
    },
    {
      desc: 'Description Courte',
      prix: 'Prix',
      promo: 'false'
    },
    {
      desc: 'Description Courte',
      prix: 'Prix',
      promo: 'false'
    },
    {
      desc: 'Description Courte',
      prix: 'Prix',
      promo: '199€'
    },
    {
      desc: 'Description Courte',
      prix: 'Prix',
      promo: 'false'
    },
    {
      desc: 'Description Courte',
      prix: 'Prix',
      promo: 'false'
    },
    {
      desc: 'Description Courte',
      prix: 'Prix',
      promo: 'false'
    },
  ]

  let title = ''

  switch(cat) {
    case '1':
      title = 'Gros Électro Ménager'
      break;
    case '2':
      title = 'Petit Électro Ménager'
      break;
    case '3':
      title = 'Multimédia & Communication'
      break;
    case '4':
      title = 'Image & Son'
      break;
    case '5':
      title = 'Bricolage & Jardin'
      break;
    case '6':
      title = 'Collectivité & Hotel - CHR'
      break;
    case '7':
      title = 'Camping & Loisirs'
      break;
    case '8':
      title = 'Meubles'
      break;
    case '9':
      title = 'Produits neufs Déclassés'
      break;
    default:
      return;
  }

  return (
    <div className="article">      
      <p>{title}</p>
      <div className="article-all">
      {
        allProduct.map((x, i) => {
          return (
            <ArticleSeul key={i} desc={x.desc} promo={x.promo} prix={x.prix} />
          )
        })
      }
      </div>
    </div>
  );
}

export default ArticleContainer;