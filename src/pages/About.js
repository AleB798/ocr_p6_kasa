import React from "react";
import Header from '../components/Header/Header.jsx';
import Banner from "../components/Banner/Banner.jsx";
import Footer from '../components/Footer/Footer.jsx';
import Collapse from "../components/Collapse/Collapse.jsx";
import Mountains from "../assets/moutains_view_1240.webp";
import { valuesDatas } from "../datas/valeurs.js";

function About() {
  return (
    <div>
      <Header />
      <Banner
        image={Mountains}
        alt="vue d'un paysage montagneux"
      />
      <Collapse data={valuesDatas} title='titleValue' content='content' />
      <Footer />
    </div>
  );
};

export default About;