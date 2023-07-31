import React from "react";
import useFetch from "../hooks/useFetch.jsx";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Collapse from '../components/Collapse/Collapse.jsx';
import Tags from '../components/Tags/Tags.jsx';
import Host from '../components/Host/Host.jsx';
import Carousel from'../components/Carousel/Carousel.jsx';
import StarsRating from "../components/StarsRating/StarsRating.jsx";

export function RentalProfil() {

    const { data } = useFetch('../logements.json'); // récupération des données dans une const via le fetch
    const { id } = useParams(); // pour accèder à la valeur de l'id

    const accommodation = data.find((item) => item.id === id); // pour récupérer les données qui concernant l'id  
    
    if (!accommodation) return 
    //hack problème fetch array vide (double render de rentalProfil surement dû à UseFetch mais impossible de trouver la cause)

    return (
      <div>
        <Header />
        <Carousel pictures={accommodation.pictures} title='title' index='index' />
        <div className="title-location_container">
                <div key={accommodation.id}>
                    <h2>{accommodation.title}</h2>
                    <h3>{accommodation.location}</h3>
                </div>
        </div>
        <Tags data={[accommodation]} />
        <Host data={[accommodation]} />
        <StarsRating rate={[accommodation.rating]} />
        <Collapse data={[accommodation]} title='title' content='description' />
        <Collapse data={[accommodation]} title='title' content='equipments' />
        <Footer />
      </div>
    );
};
  
export default RentalProfil;