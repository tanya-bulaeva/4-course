import * as S from "./style.js"


//const StyledNumberCircle = styled.div`
//  color: white;
//  background-color: #ad61ff;
//   width: 26px;
//   height: 26px;
//   border-radius: 13px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   right: -8px;
//   top: -8px;
//   font-family: StratosSkyeng;
//   font-size: 13px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 13px; /* 100% */
// `



export  function CategoryItem({
  selectedValues,
  setSelectedValues,
  list,
  multipleСhoice = true,

}) {
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
