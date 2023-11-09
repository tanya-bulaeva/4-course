import * as S from "./style.js"
import { useSelector } from "react-redux";
import { pagePlaylistSelector, tracksSelectors } from "../../store/selectors/index.js"
import { filterArtist } from "../../store/actions/creators/index.js";
export default function FilterByGenre ({
        selectedValues,
        setSelectedValues,
        list,
        multipleСhoice = true,
      
      }){
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
            


   //   {tracks.map((track) => track.genre).filter(onlyUnique).map((e) => <S.FilterLink key = {e.id}>
//{e}</S.FilterLink>) }
    return (
    
        <S.Filter>
        <S.ButtonActive className="_btn-text"  >жанру</S.ButtonActive>
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