import * as S from "./style.js"
import { useState } from 'react';
import FilterByArtist from './FilterByArtist.jsx';
import FilterByGenre from './FilterByGenre.jsx';
import FilterByYear from './FilterByYear.jsx';


export default function Filter({tracks}){
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

      <S.Dropdown>
       <S.FilterTitle >Искать по:</S.FilterTitle> 
       { openArtist ? (<><S.ButtonActive className = "_btn-text" onClick = {toggleVisibilityArtist}>исполнителю</S.ButtonActive>
        <FilterByArtist tracks ={tracks}/></>): ( <><S.FilterButton className = "_btn-text" onClick = {toggleVisibilityArtist}>исполнителю</S.FilterButton>
</>)
     } 
     {openGenre ? (<><S.ButtonActive className="_btn-text" onClick = {toggleVisibilityGenre}>жанру</S.ButtonActive>
        <FilterByGenre tracks ={tracks}/></>) : (<><S.FilterButton className="_btn-text" onClick = {toggleVisibilityGenre}>жанру</S.FilterButton></>)}
        
     </S.Dropdown>

     <S.Dropdown>
     <S.FilterTitle >Сортировка</S.FilterTitle>
  
     {openYear ? (<> <S.ButtonActive className="_btn-text" onClick = {toggleVisibilityYear}>По умолчанию</S.ButtonActive>
       <FilterByYear/></>) : (<><S.FilterButton className="_btn-text" onClick = {toggleVisibilityYear}>По умолчанию</S.FilterButton></>)}
      </S.Dropdown>


     </S.CenterblockFilter>
     )
    
}
