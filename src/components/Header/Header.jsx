import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_kasa_orange.svg';
import '../Header/header.scss';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Kasa version orange" />
      <nav className='navbar'>
        <Link to="/">Accueil</Link>
        <Link to="/About">À propos</Link>
      </nav>
    </header>
  );
  };

export default Header;
