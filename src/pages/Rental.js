import React from "react";
import useFetch from "../hooks/useFetch.jsx";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Collapse from '../components/Collapse/Collapse.jsx';
import Tags from '../components/Tags/Tags.jsx';
import Host from '../components/Host/Host.jsx';
import Carousel from'../components/Carousel/Carousel.jsx';
import StarsRating from "../components/StarsRating/StarsRating.jsx";
import '../pages/rental.scss';

export function RentalProfil() {

    const { data } = useFetch('../logements.json'); // récupération des données dans une const via le fetch
    const { id } = useParams(); // pour accèder à la valeur de l'id
    const navigate = useNavigate();

    const accommodation = data.find((item) => item.id === id); // pour récupérer les données qui concernant l'id  
    
    if (!accommodation) {
      navigate('/Error'); // redirection utilisant le hook useNavigate
      return null;
    }

    return (
      <div className='rental-page'>
        <Header />
        <Carousel pictures={accommodation.pictures} title='title' index='index' />
        <div className='rental-infos'>
        <div className='location-infos'>
            <div key={accommodation.id} className='title-location-container'>
                <h2>{accommodation.title}</h2>
                <h3>{accommodation.location}</h3>
            </div>
            <Tags data={[accommodation]} />
          </div>
          <div className='host-rate' >
            <Host data={[accommodation]} />
            <StarsRating rate={[accommodation.rating]} />
          </div>
        </div>
        <div className='collapse-rental-page'>
          <Collapse data={[accommodation]} customTitle='Description' content='description' />
          <Collapse data={[accommodation]} customTitle='Equipements' content='equipments' />
        </div>
        <Footer />
      </div>
    );
};
  
export default RentalProfil;