import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';


// Bouns Rating Using Starts
// used fontAwesome icons
const renderStars = (rating) => {

    const maxStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = maxStars - fullStars - (halfStar ?  1: 0);
    const starArray = [];

    for (let i = 0; i < fullStars; i++) {
      starArray.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }

    if (halfStar) {
      starArray.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} />);
    }

    for (let i = 0; i < emptyStars; i++) {
      starArray.push(<FontAwesomeIcon key={`empty${i}`} icon={faStar} />);
    }

    return starArray;
  };


  export default renderStars;
