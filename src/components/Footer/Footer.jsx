import React from "react";
import logowhite from "../../assets/logo_kasa_white.svg"
import '../Footer/footer.css'

function Footer() {
  return (
    <footer>
      <img src={logowhite} alt="Logo Kasa version blanche" />
      <p>C 2020 Kasa. All rights deserved.</p>
    </footer>
  );
  };

export default Footer;