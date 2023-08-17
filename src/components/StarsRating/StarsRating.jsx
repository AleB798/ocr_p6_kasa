import React from "react";
import redstar from '../../assets/red-star.svg';
import greystar from '../../assets/grey-star.svg';
import '../StarsRating/starsrating.scss';

function StarsRating ( { rate } ) {
    const maxStars = 5;
    const fullStars = rate;
    const emptyStars = maxStars - fullStars;

    const filledStars = []; // pour récupérer le nombre de stars remplies
    for (let i =0; i < fullStars; i++)
    filledStars.push(<img key={`full stars-${i}`} src={redstar} alt='Full Stars' /> );

    const unfilledStars = []; // pour récupérer le nombre de stars vides
    for (let i =0; i < emptyStars; i++)
    unfilledStars.push(<img key={`empty stars-${i}`} src={greystar} alt='Empty Stars'/> );

    return (
        <div className='stars-rating'>
            {filledStars}
            {unfilledStars}
        </div>
    );
};

export default StarsRating;