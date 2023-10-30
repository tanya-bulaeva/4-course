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
      <S.BlockMain>
      <S.CenterblockFilter>
       <S.FilterTitle >Искать по:</S.FilterTitle> 
       { openArtist ? (<S.Filter><S.ButtonActive className = "_btn-text" onClick = {toggleVisibilityArtist}>исполнителю</S.ButtonActive>
        <FilterByArtist tracks ={tracks}/></S.Filter>): ( <S.Filter><S.FilterButton className = "_btn-text" onClick = {toggleVisibilityArtist}>исполнителю</S.FilterButton>
</S.Filter>)
     } 
     {openGenre ? (<S.Filter><S.ButtonActive className="_btn-text" onClick = {toggleVisibilityGenre}>жанру</S.ButtonActive>
        <FilterByGenre tracks ={tracks}/></S.Filter>) : (<S.Filter><S.FilterButton className="_btn-text" onClick = {toggleVisibilityGenre}>жанру</S.FilterButton></S.Filter>)}
</S.CenterblockFilter>

     
 
     <S.CenterblockFilter>
      <S.FilterTitle >Сортировка</S.FilterTitle>
     {openYear ? (<S.Filter> <S.ButtonActive className="_btn-text" onClick = {toggleVisibilityYear}>По умолчанию</S.ButtonActive>
       <FilterByYear/></S.Filter>) : (<S.Filter><S.FilterButton className="_btn-text" onClick = {toggleVisibilityYear}>По умолчанию</S.FilterButton></S.Filter>)}
       </S.CenterblockFilter>

     </S.BlockMain>
     )
    
}
