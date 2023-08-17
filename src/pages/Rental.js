import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Collapse from '../components/Collapse/Collapse.jsx';
import Tags from '../components/Tags/Tags.jsx';
import Host from '../components/Host/Host.jsx';
import Carousel from'../components/Carousel/Carousel.jsx';
import StarsRating from "../components/StarsRating/StarsRating.jsx";
import '../pages/rental.scss';

function RentalProfil() {
    const accommodation = useRouteLoaderData("accommodation")

    return (
      <div className='rental-page'>
        <Header />
        <div className='rental-body'>
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
        </div>
        <Footer />
      </div>
    );
};

async function rentalLoader({ params }) {
  const accomodationId = params.id

  return fetch('../logements.json').then((response) => {
    if (!response.ok) {
      console.log('erreur dans la récupération des données')
    }
    return response.json()
  }).then(data => {
    
    const accommodation = data.find((item) => item.id === accomodationId)

    if (!accommodation) {
      throw new Response("Not Found", { status: 404 })
    }
    return accommodation
  }).catch(err => {
    throw new Response("Not Found", { status: 404 })
  })
}

export default RentalProfil;
export { rentalLoader }
