import { useState } from 'react';
import './style.css';
import FilterByArtist from './filterByArtist.js';
import FilterByGenre from './filterByGenre.js';
import FilterByYear from './filterByYear.js';
export default function Filter(){
  const [openArtist, setOpenArtist] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const [openGenre, setOpenGenre] = useState(false);
  const toggleVisibilityArtist = () => {
    setOpenArtist(openArtist ? false : true);
    setOpenGenre(false);
    setOpenYear(false);
    };
  
  const toggleVisibilityYear = () => {
    setOpenArtist(false);
    setOpenGenre(false);
    setOpenYear(openYear ? false : true)
  };
  const toggleVisibilityGenre = () => {
    setOpenArtist(false);
    setOpenGenre(openGenre ? false : true);
    setOpenYear(false)
  }
/*
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
     
    )*/
    return (
      <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="dropdown">
       { openArtist ? (<><div className = "filter__button button-year _btn-text" onClick = {toggleVisibilityArtist}>исполнителю</div>
        <FilterByArtist/></>): ( <><div className = "filter__button button-year _btn-text" onClick = {toggleVisibilityArtist}>исполнителю</div>
</>)
     } 
     {openYear ? (<> <div className="filter__button button-year _btn-text" onClick = {toggleVisibilityYear}>году выпуска</div>
       <FilterByYear/></>) : (<><div className="filter__button button-year _btn-text" onClick = {toggleVisibilityYear}>году выпуска</div></>)}

     {openGenre ? (<><div className="filter__button button-genre _btn-text" onClick = {toggleVisibilityGenre}>жанру</div>
        <FilterByGenre/></>) : (<><div className="filter__button button-genre _btn-text" onClick = {toggleVisibilityGenre}>жанру</div></>)}
     </div>
     
     </div>
     )
    
}
