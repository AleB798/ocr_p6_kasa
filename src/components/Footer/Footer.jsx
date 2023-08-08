import React from "react";
import logowhite from "../../assets/logo_kasa_white.svg"
import '../Footer/footer.scss'

function Footer() {
  return (
    <footer>
      <img src={logowhite} alt="Logo Kasa version blanche" />
      <p>© 2020 Kasa. All rights deserved.</p>
    </footer>
  );
};

export default Footer;