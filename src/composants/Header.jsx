import React, { useState } from "react";

import '../assets/css/header.css'

import logo from '../assets/img/Logo.PNG'

function Header(props) {

    const[page] = useState(props.active)
    
    const selectCat = (cat) => {
        switch(cat) {
            case 1:
                sessionStorage.setItem('cat', '1')
                window.location.replace('/cat')
                break;
            case 2:
                sessionStorage.setItem('cat', '2')
                window.location.replace('/cat')
                break;
            case 3:
                sessionStorage.setItem('cat', '3')
                window.location.replace('/cat')
                break;
            case 4:
                sessionStorage.setItem('cat', '4')
                window.location.replace('/cat')
                break;
            case 5:
                sessionStorage.setItem('cat', '5')
                window.location.replace('/cat')
                break;
            case 6:
                sessionStorage.setItem('cat', '6')
                window.location.replace('/cat')
                break;
            case 7:
                sessionStorage.setItem('cat', '7')
                window.location.replace('/cat')
                break;
            case 8:
                sessionStorage.setItem('cat', '8')
                window.location.replace('/cat')
                break;
            case 9:
                sessionStorage.setItem('cat', '9')
                window.location.replace('/cat')
                break;
            default:
                return;

        }
    }

  return (
    <div>      
        <div className="header">
            <img onClick={() => window.location.replace('/')} src={logo} alt="logo-nesri" width="20%" height="20%"></img>
            <div className="header-searchbar">
                <i class="fas fa-search"></i>
                <input></input>
            </div>
            <div>
                <i onClick={() => window.location.replace('account')} style={page === 'account' ? {color: '#e51b2248'} : null} class="fal fa-user-circle"></i>
                <i onClick={() => window.location.replace('buy')} style={page === 'shop' ? {color: '#e51b2248'} : null} class="far fa-shopping-bag"></i>
                <i style={page === 'heart' ? {color: '#e51b2248'} : null} class="fas fa-heart"></i>
                <i style={page === 'sav' ? {color: '#e51b2248'} : null} class="far fa-exchange-alt"></i>
            </div>
        </div>
        <div className="sub-header">
            <p onClick={() => selectCat(1)}>Gros Electro Ménager</p>
            <span></span>
            <p onClick={() => selectCat(2)}>Petit Electro Ménager</p>
            <span></span>
            <p onClick={() => selectCat(3)}>Multimédia & Communication</p>
            <span></span>
            <p onClick={() => selectCat(4)}>Image & Son</p>
            <span></span>
            <p onClick={() => selectCat(5)}>Bricolage & Jardin</p>
            <span></span>
            <p onClick={() => selectCat(6)}>Collectivité & Hotel - CHR</p>
            <span></span>
            <p onClick={() => selectCat(7)}>Camping & Loisirs</p>
            <span></span>
            <p onClick={() => selectCat(8)}>Meubles</p>
            <span></span>
            <p onClick={() => selectCat(9)}>Produits neufs Déclassés</p>
        </div>
    </div>
  );
}

export default Header;