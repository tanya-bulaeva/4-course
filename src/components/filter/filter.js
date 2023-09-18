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
       { openArtist ? (<><button className = "button-active _btn-text" onClick = {toggleVisibilityArtist}>исполнителю</button>
        <FilterByArtist/></>): ( <><div className = "filter__button  _btn-text" onClick = {toggleVisibilityArtist}>исполнителю</div>
</>)
     } 
     {openYear ? (<> <button className="button-active _btn-text" onClick = {toggleVisibilityYear}>году выпуска</button>
       <FilterByYear/></>) : (<><div className="filter__button  _btn-text" onClick = {toggleVisibilityYear}>году выпуска</div></>)}

     {openGenre ? (<><button className="button-active _btn-text" onClick = {toggleVisibilityGenre}>жанру</button>
        <FilterByGenre/></>) : (<><div className="filter__button  _btn-text" onClick = {toggleVisibilityGenre}>жанру</div></>)}
     </div>
     
     </div>
     )
    
}
