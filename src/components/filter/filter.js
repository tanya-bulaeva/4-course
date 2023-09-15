import { useState } from 'react';
import './style.css';
import FilterByArtist from './filterByArtist.js';
import FilterByGenre from './filterByGenre.js';
import FilterByYear from './filterByYear.js';
export default function Filter(){
  const [openArtist, setOpenArtist] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const [openGenre, setOpenGenre] = useState(false);
  const toggleVisibilityArtist = () => setOpenArtist(true);
  const toggleVisibilityYear = () => setOpenYear(true);
  const toggleVisibilityGenre = () => setOpenGenre(true);

    return (
        <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>

        <div className = "filter__button button-year _btn-text" onClick = {toggleVisibilityArtist}>исполнителю</div>
        {openArtist && (<FilterByArtist/>)}
        <div className="filter__button button-year _btn-text" onClick = {toggleVisibilityYear}>году выпуска</div>
        {openYear && (<FilterByYear/>)}
        <div className="filter__button button-genre _btn-text" onClick = {toggleVisibilityGenre}>жанру</div>
        {openGenre && (<FilterByGenre/>)}
      </div>

      
    )
}