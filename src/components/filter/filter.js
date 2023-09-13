import { useState } from 'react';
import FilterByArtist from './filterByArtist.js';
export default function Filter(){
  const [openMenu, setOpenMenu] = useState(null);
  const toggleVisibility  = () => setOpenMenu(!openMenu);
    return (
        <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className="filter__button button-author _btn-text" onClick ={toggleVisibility}>
          исполнителю 
        </div> 
        <div className="filter__button button-year _btn-text">
          году выпуска
        </div>
        <div className="filter__button button-genre _btn-text">жанру</div>
      </div>
    )
}