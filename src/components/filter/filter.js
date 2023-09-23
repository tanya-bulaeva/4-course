import * as S from "./style.js"
import { useState } from 'react';
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

    return (
      <S.CenterblockFilter>
      <S.FilterTitle >Искать по:</S.FilterTitle>
      <S.Dropdown>
       { openArtist ? (<><S.ButtonActive className = "_btn-text" onClick = {toggleVisibilityArtist}>исполнителю</S.ButtonActive>
        <FilterByArtist/></>): ( <><S.FilterButton className = "_btn-text" onClick = {toggleVisibilityArtist}>исполнителю</S.FilterButton>
</>)
     } 
     {openYear ? (<> <S.ButtonActive className="_btn-text" onClick = {toggleVisibilityYear}>году выпуска</S.ButtonActive>
       <FilterByYear/></>) : (<><S.FilterButton className="_btn-text" onClick = {toggleVisibilityYear}>году выпуска</S.FilterButton></>)}

     {openGenre ? (<><S.ButtonActive className="_btn-text" onClick = {toggleVisibilityGenre}>жанру</S.ButtonActive>
        <FilterByGenre/></>) : (<><S.FilterButton className="_btn-text" onClick = {toggleVisibilityGenre}>жанру</S.FilterButton></>)}
     </S.Dropdown>
     
     </S.CenterblockFilter>
     )
    
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