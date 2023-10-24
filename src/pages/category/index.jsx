import * as S from "../main/style";

import NavMenu from "../../components/navMenu/NavMenu";
import Search from "../../components/search/Search";
import Filter from "../../components/filter/Filter";
import UserAccount from "../../components/userAccount/UserAccount";
import Collections from "../../components/collections/Collections";
import MediaPlayer from "../../components/mediaplayer/MediaPlayer";
import Playlist from "../../components/playlist/Playlist";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CategoryItems } from "../../components/collections/CategoryItems.jsx";
import { pagePlaylistSelector, tracksSelectors } from "../../store/selectors";
export const Category = ({ currentTrack, tracks, tracksError, setCurrentTrack, Audioref, loading }) => {
  const params = useParams();
  const category = CategoryItems.find((categoryItem) => categoryItem.id === Number(params.id));
  const categoryName = `${category.name}`;

  return (       <>

        <S.CenterclockH2>{categoryName} </S.CenterclockH2>

</>
    );
    };