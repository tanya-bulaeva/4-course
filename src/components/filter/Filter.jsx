import * as S from "./style.js"
import { useState } from 'react';


import { useDispatch, useSelector } from "react-redux";
import { pagePlaylistSelector, tracksSelectors } from "../../store/selectors/index.js";
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
            <CategoryItem
               title = {"исполнителю"}
                      filter={filter.author}
                      list={TrackAuthorList}
                      selectedValues={selectedArtists}
                      setSelectedValues={setSelectedArtists}
                      onClick={() => selectCategory('artist')}
                    ></CategoryItem>
        
        
            </S.Filter>
        
        
            <S.Filter>
            <CategoryItem
            title = {"жанру"}
                      filter={filter.genre}
                      list={TrackGenreList}
                      selectedValues={selectedGenres}
                      setSelectedValues={setSelectedGenres}
                      onClick={() => selectCategory('genre')}
                    ></CategoryItem>
        
        
            </S.Filter>
        
          </S.CenterblockFilter>
        
        
        
        </S.BlockMain>
        
             )
        
        }

