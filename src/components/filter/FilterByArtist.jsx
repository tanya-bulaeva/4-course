import * as S from "./style.js"
// export default function FilterByArtist (){
//     const tracks = useSelector(pagePlaylistSelector)
//     const dispatch = useDispatch()
//     const filter = useSelector(filterSelector)
//     function onlyUnique(value, index, tracks) {
//         return tracks.indexOf(value) === index;
//       }

//     const TrackAuthor = tracks.map((track) =>  track.author)
//     const newlist = [...new Set (TrackAuthor)]
    
// //const uniqueItem = TrackAuthor.filter(onlyUnique)     
//       const uniqueList = newlist.map((e) => <S.FilterLink key = {e.id} onClick={ArtistChange}>
//       {e}</S.FilterLink>)
// //console.log(uniqueList);
//     return (<S.DropStyle>
// <S.DropdownContent>

// </S.DropdownContent>
// </S.DropStyle>
// )
// }
export  function FilterByArtist ( {
    selectedValues,
    setSelectedValues,
    list,
    multipleСhoice = true,
  isOpen
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
