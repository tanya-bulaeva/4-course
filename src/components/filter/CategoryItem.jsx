import { useState } from "react"
import * as S from "./style.js"

export  function CategoryItem({
    selectedValues,
    setSelectedValues,
    isOpen,
    title,
    onClick,
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
      {isOpen ? (<S.FilterButton  className= '_btn-text'
        onClick={onClick}  > {title}</S.FilterButton>) : ( <S.ButtonActive   className= '_btn-text'
        onClick={onClick}  > {title}</S.ButtonActive>)}
      
   


            {!isOpen ? null : (
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
          </S.DropdownContent>)}

              {selectedValues.length > 0 && !(selectedValues[0] === 'По умолчанию') ? (
       <S.StyledNumberCircle>{selectedValues.length}</S.StyledNumberCircle>
     ) : null}


    </S.Filter>
  )
}
