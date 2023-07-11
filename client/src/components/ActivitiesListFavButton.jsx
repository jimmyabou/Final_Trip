import React, { useState, useContext } from 'react';
import { AttractionsContext } from '../providers/AttractionsContext';

const ActivitiesListFavButton = ({ attraction_id }) => {
  const { handleFavAttraction, favAttractionIds } = useContext(AttractionsContext);

  const [fav, setFav] = useState(false);

  const toggleFavorite = (attraction_id) => {
    handleFavAttraction(attraction_id);
    setFav(!fav);
  };



  return (
    <button className="fav-button" onClick={() => toggleFavorite(attraction_id)}>
      <i className={`fa ${fav ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
    </button>
  );
};

export default ActivitiesListFavButton;
