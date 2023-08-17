import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo_kasa_orange.svg';
import '../Header/header.scss';

function Header() {
  return (
    <header>
      <NavLink exact="true" to="/">
        <img src={logo} alt="Logo Kasa version orange" />
      </NavLink>
      <nav className='navbar'>
        <NavLink exact="true" to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  );
  };

export default Header;
