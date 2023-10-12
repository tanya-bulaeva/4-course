import * as S from "../main/style";
import NavMenu from "../../components/navMenu/NavMenu";
import Search from "../../components/search/Search";
import Filter from "../../components/filter/Filter";
import UserAccount from "../../components/userAccount/UserAccount";
import Collections from "../../components/collections/Collections";
import MediaPlayer from "../../components/mediaplayer/MediaPlayer";
import { useParams } from "react-router-dom";
import { CategoryItems } from "../../components/collections/CategoryItems.jsx";
export const Category = ({loading, currentTrack, tracks, tracksError, setCurrentTrack }) => {
  const params = useParams();
  const category = CategoryItems.find((categoryItem) => categoryItem.id === Number(params.id));
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
      </S.MainCenterblock>
      <S.MainSidebar>
    <UserAccount   />
      </S.MainSidebar>
         </S.MainStyle>
    <footer className="footer"></footer>
  </S.ContainerStyle>
</S.WrapperStyle>
</>
    );
    };