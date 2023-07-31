import React from "react";
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';


function Error() {
    return (
        <div>
            <Header />
            <section className="error_section">
                <div>
                    <p className="error-number">404</p>
                    <p>Ooups! la page que vous demandez n'existe pas!</p>
                </div>
                <div>
                    <Link to="/">Retourner sur la page d'accueil</Link>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default Error;
