import * as S from "../main/style";
import NavMenu from "../../components/navMenu/navMenu.js"
import Search from '../../components/search/search.js';
import Filter from '../../components/filter/filter.js';
import UserAccount from '../../components/userAccount/userAccount.js';
import Collections from '../../components/collections/collections';
import { useParams } from "react-router-dom";
import { categoryItems } from "../../components/collections/categoryItems";
export const Category = ({loading}) => {
  const params = useParams();
  const category = categoryItems.find((categoryItem) => categoryItem.id === Number(params.id));
  const categoryName = `${category.name}`;
  return (       <>
    <S.GlobalStyle />
<S.WrapperStyle>
  <S.ContainerStyle>
    <S.MainStyle>
    <NavMenu />
      <S.MainCenterblock>
    <Search />
        <S.CenterclockH2>{categoryName} </S.CenterclockH2>
      <Filter />
      </S.MainCenterblock>
      <S.MainSidebar>
    <UserAccount />
    <Collections loading = {loading}/>
      </S.MainSidebar>
    </S.MainStyle>
    <footer className="footer"></footer>
  </S.ContainerStyle>
</S.WrapperStyle>
</>
    );

    };