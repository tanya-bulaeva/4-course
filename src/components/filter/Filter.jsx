import * as S from "./style.js"
import { useState } from 'react';
import FilterByArtist from './FilterByArtist.jsx';
import FilterByGenre from './FilterByGenre.jsx';
import FilterByYear from './FilterByYear.jsx';
import { filterYear } from "../../store/actions/creators/index.js";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector, pagePlaylistSelector, tracksSelectors } from "../../store/selectors/index.js";
import { useEffect } from "react";

export default function Filter( ){
  const filter = useSelector(filterSelector)
  const tracks = useSelector(pagePlaylistSelector) 
  const newTracks = tracks?.slice(0)
  const dispatch = useDispatch() 
  const [openArtist, setOpenArtist] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const [openGenre, setOpenGenre] = useState(false);
  const [filterValue, setFilterValue] = useState (null);

  const [filterItems, setFilterItems] = useState([
    { id: 1, text: "По умолчанию", number: "" },
    { id: 2, text: "Сначала новые", number: "1" },
    { id: 3, text: "Сначала старые", number: "1" },
  ]);



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

  const yearChange  = () => {
      if ( filterValue?.text === filterItems[1].text) dispatch(filterYear('>'))
      else if (filterValue?.text === filterItems[2].text) dispatch(filterYear('<'))
      else if (filterValue?.text === filterItems[0].text) dispatch(filterYear(null))
      console.log(filterValue?.text);

    }//не с первого раза переключает, а только после второго клика, на первый как будто цепляет предудыщее значение



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

      {openYear ? (     <S.Filter>  


<S.ButtonActive className="_btn-text" onChange={toggleVisibilityYear}  > {filterValue ? (<><S.FilterLink  >{filterValue.text} </S.FilterLink> </>) : ("По умолчанию") }</S.ButtonActive>


<S.DropStyle  >
<S.DropdownContent     >
 {filterItems?.map((filterItem) => {
   return (<S.FilterLink onClick={ ()  => {setFilterValue(filterItem); yearChange()}}  key={filterItem.id}>
     {filterItem.text} </S.FilterLink>)
 })}
</S.DropdownContent>
{filterValue   ? (<S.ButtonNumber>{filterValue.number}</S.ButtonNumber>   ) : null}
</S.DropStyle>
</S.Filter>) : (<S.Filter><S.FilterButton className="_btn-text" onClick={toggleVisibilityYear}> {filterValue ? <S.FilterLink  >{filterValue.text}</S.FilterLink> : ("По умолчанию")}

</S.FilterButton></S.Filter>)}


       </S.CenterblockFilter>
     </S.BlockMain>

     )
    
}

