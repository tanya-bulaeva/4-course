import * as S from "./style.js"
import { useDispatch, useSelector } from "react-redux"
import {  pagePlaylistSelector } from "../../store/selectors/index.js"
import { filterArtist } from "../../store/actions/creators/index.js";
import { useState } from "react";
export  function FilterByArtist ( {
    selectedValues,
    setSelectedValues,
    list,
    multipleСhoice = true,

  } ){

    const handleItemClick = (item) => {
        const index = selectedValues.indexOf(item)
        if (multipleСhoice) {
          if (index > -1) {
            setSelectedValues(selectedValues.toSpliced(index, 1))
          } else {
            setSelectedValues([...selectedValues, item])
          }
          return
        }
        setSelectedValues([item])
      }






    return (  
          <S.Filter>
        <S.ButtonActive className="_btn-text"  >исполнителю</S.ButtonActive>
          <S.DropdownContent>
            {list?.map((item) => {
              return (
                <li
                  key={item}
                  onClick={() => handleItemClick(item)}
                >
                  {selectedValues.includes(item) ? (
                    <S.StyledStrongItem>{item}</S.StyledStrongItem>
                  ) : (
                    item
                  )}
                </li>
              )
            })}
          </S.DropdownContent>
              {selectedValues.length > 0 && !(selectedValues[0] === 'По умолчанию') ? (
       <S.StyledNumberCircle>{selectedValues.length}</S.StyledNumberCircle>
     ) : null}


    </S.Filter>
)
}

//  {tracks?.map((track) => <S.FilterLink  key = {track.id}onClick={ArtistChange}>{track.author}</S.FilterLink>)}