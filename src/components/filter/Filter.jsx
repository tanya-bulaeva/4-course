import * as S from "./style.js"
import { useState } from 'react';

import { filterArtist, filterYear } from "../../store/actions/creators/index.js";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector, pagePlaylistSelector, tracksSelectors } from "../../store/selectors/index.js";
import { useEffect } from "react";
import {FilterByArtist }from './FilterByArtist.jsx'
import { CategoryItem } from "./CategoryItem.jsx";
import FilterByGenre from "./FilterByGenre.jsx";

export default function Filter( selectedValues,
  setSelectedValues,
  title,
  onClick,
  list,
  multipleСhoice = true){
  const filter = useSelector(filterSelector)
  const tracks = useSelector(pagePlaylistSelector) 
  const dispatch = useDispatch() 
  const [openArtist, setOpenArtist] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const [openGenre, setOpenGenre] = useState(false);
  const [filterValue, setFilterValue] = useState (null);
  const [selectedGenres, setSelectedGenres] = useState([])
  const [selectedArtists, setSelectedArtists] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
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

  
  useEffect(() => {
    if (filterValue) yearChange()
  },[filterValue])

  const yearChange  = () => {
      if ( filterValue?.text === filterItems[1].text) {dispatch(filterYear('>'))}
      else if (filterValue?.text === filterItems[2].text) dispatch(filterYear('<'))
      else if (filterValue?.text === filterItems[0].text) dispatch(filterYear(null))
      console.log(filterValue?.text);
    } 

const ArtistFilter  = () => {

  console.log(4);
    }

  const TrackAuthorList = [... new Set (tracks.map((track) =>  track.author))]
  const TrackGenreList = [... new Set (tracks.map((track) =>  track.genre))]
  const selectCategory = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory(null)
      return
    }
    setSelectedCategory(category)
  }
  const filterTracks = () => {
    let filteredTracks = tracks
    if (selectedGenres.length > 0) {
      filteredTracks = filteredTracks.filter(({ genre }) =>
        selectedGenres.includes(genre),
      )
    }
    if (selectedArtists.length > 0) {
      filteredTracks = filteredTracks.filter(({ author }) =>
        selectedArtists.includes(author),
      )
    }
  

    return filteredTracks
  }

  const filteredTracks = filterTracks()
return (
<S.BlockMain>
  <S.CenterblockFilter>
       <S.FilterTitle >Искать по:</S.FilterTitle> 
            
    <S.Filter>
    <FilterByArtist
              onClick={() => selectCategory('artist')}
              
              list={TrackAuthorList}
              selectedValues={selectedArtists}
              setSelectedValues={setSelectedArtists}
            ></FilterByArtist>

    
    </S.Filter>


    <S.Filter>
    <FilterByGenre
              onClick={() => selectCategory('genre')}
              list={TrackGenreList}
              selectedValues={selectedGenres}
              setSelectedValues={setSelectedGenres}
            ></FilterByGenre>

    
    </S.Filter>

  </S.CenterblockFilter>
    

     <S.CenterblockFilter>
      <S.FilterTitle >Сортировка</S.FilterTitle>
      {openYear  ? (
     
     <S.Filter>
        <S.ButtonActive className="_btn-text" onClick = {toggleVisibilityYear}>{filterValue ? (<><S.FilterLink   >{filterValue.text} </S.FilterLink> </>) : ("По умолчанию") }</S.ButtonActive>
          <S.DropStyle>
            <S.DropdownContent >
            {filterItems?.map((filterItem) => {
   return (<S.FilterLink onClick={ ()  => {setFilterValue(filterItem); yearChange()}}  key={filterItem.id}  
               selectedValues={selectedArtists}
   setSelectedValues={setSelectedArtists}>
     {filterItem.text} </S.FilterLink>)
 })}
            </S.DropdownContent>
            {filterValue && !(filterValue?.text === filterItems[0].text)  ? (<S.StyledNumberCircle>{filterValue.number}</S.StyledNumberCircle>   ) : null}
</S.DropStyle>

     </S.Filter>) : 
     
     (<S.Filter><S.FilterButton className="_btn-text" onClick = {toggleVisibilityYear} >{filterValue.text}{filterValue && !(filterValue?.text === filterItems[0].text)  ? (<S.StyledNumberCircle>{filterValue.number}</S.StyledNumberCircle>   ) : "По умолчанию"}</S.FilterButton>
     </S.Filter>)}
     </S.CenterblockFilter>
</S.BlockMain>

     )
    
}
/*
export default function Filter(){
  const filter = useSelector(filterSelector)
  const tracks = useSelector(pagePlaylistSelector) 
  const dispatch = useDispatch() 
  const [openArtist, setOpenArtist] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const [openGenre, setOpenGenre] = useState(false);
  const [filterValue, setFilterValue] = useState (null);
  const [selectedGenres, setSelectedGenres] = useState([])
  const [selectedArtists, setSelectedArtists] = useState([])

 
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

  
  useEffect(() => {
    if (filterValue) yearChange()
  },[filterValue])

  const yearChange  = () => {
      if ( filterValue?.text === filterItems[1].text) {dispatch(filterYear('>'))}
      else if (filterValue?.text === filterItems[2].text) dispatch(filterYear('<'))
      else if (filterValue?.text === filterItems[0].text) dispatch(filterYear(null))
      console.log(filterValue?.text);
    } 

const ArtistFilter  = () => {

  console.log(4);
    }

  const TrackAuthorList = [... new Set (tracks.map((track) =>  track.author))]
  const TrackGenreList = [... new Set (tracks.map((track) =>  track.genre))]

return (
<S.BlockMain>
  <S.CenterblockFilter>
       <S.FilterTitle >Искать по:</S.FilterTitle> 
       
       { openArtist ? (
       
    <S.Filter>
        <S.ButtonActive className = "_btn-text" onClick = {toggleVisibilityArtist}  >исполнителю</S.ButtonActive>
        <S.DropStyle>
<S.DropdownContent>
{TrackAuthorList.map((e) => <S.FilterLink key = {e} onClick = {ArtistFilter} >{e}</S.FilterLink>)}
</S.DropdownContent>
</S.DropStyle>     
 

       <S.ButtonNumber>2</S.ButtonNumber>           
    </S.Filter>): 
    
    ( <S.Filter> 
      <S.FilterButton className = "_btn-text" onClick = {toggleVisibilityArtist}>исполнителю</S.FilterButton>
      </S.Filter>)
     }


     {openGenre ? (
     
     <S.Filter>
        <S.ButtonActive className="_btn-text" onClick = {toggleVisibilityGenre}>жанру</S.ButtonActive>
          <S.DropStyle>
            <S.DropdownContent >
     {TrackGenreList.map((e) =>  <S.FilterLink key = {e} >{e}</S.FilterLink>)}
            </S.DropdownContent>
          </S.DropStyle>
        <S.ButtonNumber>3</S.ButtonNumber>     
     </S.Filter>) : 
     
     (<S.Filter><S.FilterButton className="_btn-text" onClick = {toggleVisibilityGenre}>жанру</S.FilterButton>
     </S.Filter>)}

  </S.CenterblockFilter>
    

     <S.CenterblockFilter>
      <S.FilterTitle >Сортировка</S.FilterTitle>
      {openYear  ? (
     
     <S.Filter>
        <S.ButtonActive className="_btn-text" onClick = {toggleVisibilityYear}>{filterValue ? (<><S.FilterLink   >{filterValue.text} </S.FilterLink> </>) : ("По умолчанию") }</S.ButtonActive>
          <S.DropStyle>
            <S.DropdownContent >
            {filterItems?.map((filterItem) => {
   return (<S.FilterLink onClick={ ()  => {setFilterValue(filterItem); yearChange()}}  key={filterItem.id}>
     {filterItem.text} </S.FilterLink>)
 })}
            </S.DropdownContent>
            {filterValue   ? (<S.ButtonNumber>{filterValue.number}</S.ButtonNumber>   ) : null}
</S.DropStyle>

     </S.Filter>) : 
     
     (<S.Filter><S.FilterButton className="_btn-text" onClick = {toggleVisibilityYear} >{filterValue ? (<><S.FilterLink  >{filterValue.text} </S.FilterLink> </>) : ("По умолчанию") }</S.FilterButton>
     </S.Filter>)}
     </S.CenterblockFilter>
</S.BlockMain>

     )
    
}
*/