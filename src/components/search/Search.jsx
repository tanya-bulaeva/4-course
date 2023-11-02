import { useDispatch, useSelector } from "react-redux"
import * as S from "./style.js"
import { searchSelector } from "../../store/selectors/index.js"
import { searchPage } from "../../store/actions/creators/index.js"
export default function Search (){
  const search = useSelector(searchSelector)
  const dispatch =  useDispatch()
  const searchClick = (event) => {
    const searchQuery = event.target.value;
   // console.log (searchQuery)
    dispatch(searchPage(searchQuery))
  }
    return(
        <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText
        onChange={searchClick}
        value = {search}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.CenterblockSearch>
    )
}