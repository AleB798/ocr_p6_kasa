import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_kasa_orange.svg';
import '../Header/header.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Kasa version orange" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/About">À propos</Link>
      </nav>
    </header>
  );
  };

export default Header;
