import React, { useContext, useState } from 'react';

import { AttractionsContext } from '../providers/AttractionsContext';
import ModalContext from '../providers/ModalContext';



const CategoryFilterButton = (props) => {

  const [active, setActive] = useState(false); //change background color of filter btns
  const { handleOpenModalCategoryFilter, setFilterName } = useContext(ModalContext);

  const { city, setFilters } = useContext(AttractionsContext);

  const handleFilter = (name) => {

    // remove previous rating filter (if exists)
    setFilters(prevState => prevState.filter(
      (item) => {
        if (typeof item === 'object' && 'City' in item) {
          return false; // Exclude objects with the specified key
        }
        return true; // Include strings and other objects
      }
    ));
    //add new City
    setFilters(prevState => [...prevState, { 'City': city }]);

    setActive(!active);
    //ratings and budget have modals pop up
    if (['Rating', 'Budget'].includes(name) && active === false) {
      setFilterName(name);
      handleOpenModalCategoryFilter();
    } else if (active === false) {
      setFilters(prevState => [...prevState, name]);
    } else { //remove filter from list if deactivated
      setFilters(prevState => prevState.filter(el => el !== name));
    }
  };



  return (

    <button className="nav-category__menu-item"
      onClick={() => handleFilter(props.name)}
      style={{ backgroundColor: active ? "#51D4BF" : "white" }}
    >
      <i className={props.icon}></i>
      <h4>{props.name}</h4>
    </button>


  );


};

export default CategoryFilterButton;