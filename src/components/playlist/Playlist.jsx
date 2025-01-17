import { useDispatch, useSelector } from "react-redux"
import * as S from "./style.js"
import { Tracklists } from "./Tracklists.jsx"
import { pagePlaylistSelector } from "../../store/selectors/index.js"
import {  setTrackCurrent } from "../../store/actions/creators/index.js"
import { useState} from "react"
import { CategoryItem } from "../filter/CategoryItem.jsx"
import { compare } from "../../helpers.js"

export default function Playlist ({loading, title, hiden, tracks}) {
  const playlist = useSelector(pagePlaylistSelector)
  const originalPlaylist = playlist
  const dispatch = useDispatch() 
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setsearchQuery] = useState('')
  const [selectedGenres, setSelectedGenres] = useState([])
  const [selectedArtists, setSelectedArtists] = useState([])
  const DEFAULT_SORT_VALUE = 'По умолчанию'
  const ASC_SORT_VALUE = 'Сначала старые'
  const DESC_SORT_VALUE = 'Сначала новые'
  const [selectedYears, setSelectedYears] = useState([DEFAULT_SORT_VALUE])
  const years = [DEFAULT_SORT_VALUE, ASC_SORT_VALUE, DESC_SORT_VALUE]
  const setUpTrack = (track) => {
    dispatch(setTrackCurrent(track))
    dispatch(setCurrentPlaylist(playlist))
  }
  const TrackAuthorList = [... new Set (playlist?.map((track) =>  track.author))]
  const TrackGenreList = [... new Set (playlist?.map((track) =>  track.genre))]

  const selectCategory = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory(null)
      return
    }
    setSelectedCategory(category)
  }
  const filterTracks = () => {
    let filteredTracks = originalPlaylist
    if (selectedGenres.length > 0) {
      filteredTracks = filteredTracks?.filter(({ genre }) =>
        selectedGenres.includes(genre),
      )
    }
    if (selectedArtists.length > 0) {
      filteredTracks = filteredTracks?.filter(({ author }) =>
        selectedArtists.includes(author),
      )
    }
    if (selectedYears[0] === ASC_SORT_VALUE) {

      filteredTracks = [...filteredTracks]?.sort(compare)
    }
    if (selectedYears[0] === DESC_SORT_VALUE) {

     filteredTracks = [...filteredTracks]?.sort(compare).reverse();
      
    }
    if (searchQuery.length > 0) {
      filteredTracks = filteredTracks?.filter(({ name }) =>
        name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()),
      )
    }

    return filteredTracks
  }
const filteredTracks = filterTracks()

return (<>
  <S.CenterblockSearch>
  <S.SearchSvg>
    <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
  </S.SearchSvg>
  <S.SearchText
    value={searchQuery}
    onChange={(e) => setsearchQuery(e.target.value)}
    type="search"
    placeholder="Поиск"
    name="search"
  />
</S.CenterblockSearch>

  <S.CenterblockH2>{title}</S.CenterblockH2>
  <S.CenterblockContent >

   {hiden ? ('') : (<S.BlockMain>
<S.CenterblockFilter>
 <S.FilterTitle >Искать по:</S.FilterTitle> 

<S.Filter>
<CategoryItem
        title="исполнителю"
        isOpen={selectedCategory === 'artist'}  
        list={TrackAuthorList}        
        selectedValues={selectedArtists}
        setSelectedValues={setSelectedArtists}
        onClick={() => selectCategory('artist')}
      ></CategoryItem>
</S.Filter>
<S.Filter>
<CategoryItem
        title="жанру"
        isOpen={selectedCategory === 'genre'}
        list={TrackGenreList}                   
        selectedValues={selectedGenres}
        setSelectedValues={setSelectedGenres}
        onClick={() => selectCategory('genre')}
      ></CategoryItem>



</S.Filter>

</S.CenterblockFilter>
<S.CenterblockFilter>
<CategoryItem
          title={selectedYears[0]}
          isOpen={selectedCategory === 'year'}
          list={years}
          selectedValues={selectedYears}
          setSelectedValues={setSelectedYears}
          multipleСhoice={false}
          onClick={() => selectCategory('year')}
          ></CategoryItem>
</S.CenterblockFilter>
</S.BlockMain>)}
    <S.ContentTitle>
      <S.PlaylistTitleCol01 className="col01">Трек</S.PlaylistTitleCol01>
      <S.PlaylistTitleCol02 className="col02">ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol02>
      <S.PlaylistTitleCol03 className="col03">АЛЬБОМ</S.PlaylistTitleCol03>
      <S.PlaylistTitleCol04 className="col04">
        <S.PlaylistTitleSvg alt="time">
          <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
        </S.PlaylistTitleSvg>
      </S.PlaylistTitleCol04>
    </S.ContentTitle>
    <S.ContentPlaylist>
      {loading ? (
        filteredTracks?.map((track) => 
                <S.PlaylistItem key = {track.id}>
  <S.PlaylistTrack>
    <S.TrackTitle>
      <S.TrackTitleImageSkeleton>
    </S.TrackTitleImageSkeleton>
      <S.TrackTitleTextSkeleton >{track.name}
      <S.TrackTitleLinkSkeleton>
       </S.TrackTitleLinkSkeleton>
    </S.TrackTitleTextSkeleton>
    </S.TrackTitle>
     <S.TrackAuthorSkeleton>
    <S.TrackAuthorLinkSkeleton >{track.author}</S.TrackAuthorLinkSkeleton>
  </S.TrackAuthorSkeleton>
  <S.TrackAlbumSkeleton >
    <S.TrackAlbumLinkSkeleton 
      >{track.album}</S.TrackAlbumLinkSkeleton>
  </S.TrackAlbumSkeleton>
    <S.TrackTimeSkeleton>
    <S.TrackTimeSvgSkeleton alt="time">
    </S.TrackTimeSvgSkeleton>
    <S.TrackTimeTextSkeleton > </S.TrackTimeTextSkeleton>
  </S.TrackTimeSkeleton>
  </S.PlaylistTrack>
  </S.PlaylistItem>
        )

 ) : (
  filteredTracks?.map((track) => <Tracklists key = {track.id} tracks = {tracks} track= {track} loading = {loading} onclick = {() => setUpTrack(track)}/>) )}


     </S.ContentPlaylist>
</S.CenterblockContent></>
)
}

