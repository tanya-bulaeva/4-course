import { useDispatch, useSelector } from "react-redux";
import * as S from "./style.js"
import { filterSelector, pagePlaylistSelector } from "../../store/selectors/index.js";
import { filterYear } from "../../store/actions/creators/index.js";
import { useState } from "react";
export default function FilterByYear (date){
    const tracks = useSelector(pagePlaylistSelector) 

    const newTracks = tracks.slice(0)
    const dispatch = useDispatch() 
    const filter = useSelector(filterSelector)

    function compare(a, b) {
   let dateA = new Date(a.release_date)
   let dateB = new Date(b.release_date)
 
   return dateB - dateA
 }

 //не корр работает. если сначала кликнуть по умолчанию, то ок, но если после пройтись по др фильтрам и снова по умолчанию, то работает некорретно
 const clickYear= () => {
    const result = tracks 
    console.log(result);
 }


 const clickYearNew= () => {
    const result = newTracks?.sort(compare)
    console.log(result);

 }

 const clickYearOld = () => {
    const result = newTracks?.sort(compare).reverse();
    console.log(result);
 }


    return (<S.DropStyle >
<S.DropdownContent  >
<S.FilterLink  onClick={clickYear} >По умолчанию</S.FilterLink>
<S.FilterLink   onClick={clickYearNew} >Сначала новые</S.FilterLink>
<S.FilterLink onClick={clickYearOld} >Сначала старые</S.FilterLink>
</S.DropdownContent>
</S.DropStyle>
    )
}