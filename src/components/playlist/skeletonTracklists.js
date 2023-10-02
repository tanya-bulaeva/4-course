import * as S from "./style.js"
import { tracks } from "./tracks.js"
export function SkeletonPlayer(){
  return (
      <>
      {tracks.map((track) => (
        <S.ContentPlaylist  key = {track.id}>
          <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImageSkeleton>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              </S.TrackTitleImageSkeleton>
              <S.TrackTitleTextSkeleton>
                <S.TrackTitleLinkSkeleton  href="http://"
                  >{track.name}
                  <S.TrackTitleSpan>{track.trackTitle}</S.TrackTitleSpan></S.TrackTitleLinkSkeleton>
              </S.TrackTitleTextSkeleton>
              </S.TrackTitle>
            <S.TrackAuthorSkeleton>
              <S.TrackAuthorLinkSkeleton href="http://">{track.author}</S.TrackAuthorLinkSkeleton>
            </S.TrackAuthorSkeleton>
            <S.TrackAlbumSkeleton >
              <S.TrackAlbumLinkSkeleton href="http://"
                >{track.album}</S.TrackAlbumLinkSkeleton>
            </S.TrackAlbumSkeleton>
            <S.TrackTimeSkeleton>
              <S.TrackTimeSvgSkeleton alt="time">
              </S.TrackTimeSvgSkeleton>
              <S.TrackTimeTextSkeleton >{track.time}</S.TrackTimeTextSkeleton>
            </S.TrackTimeSkeleton>
          </S.PlaylistTrack>
          </S.PlaylistItem>
          </S.ContentPlaylist>
        )
      )}
      </>
  )
}
/*export  const skeletonPlayer =
 <div className="content__playlist playlist">
<div className="PlaylistItem
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://"
          >Guilt <span className="track__title-span"></span
        ></a>
      </div>
    </div>
    <div className="TrackAuthor skeleton">
      <a className="TrackAuthor-link skeleton" href="http://">Nero</a>
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://"
        >Welcome Reality</a
      >
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton">4:44</span>
    </div>
  </div>
</div>

<div className="PlaylistItem">
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://"
          >Elektro <span className="track__title-span"></span
        ></a>
      </div>
    </div>
    <div className="TrackAuthor skeleton">
      <a className="TrackAuthor-link skeleton" href="http://"
        >Dynoro, Outwork, Mr. Gee</a
      >
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://">Elektro</a>
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton">2:22</span>
    </div>
  </div>
</div>

<div className="PlaylistItem">
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://"
          >I’m Fire <span className="track__title-span"></span
        ></a>
      </div>
    </div>
    <div className="TrackAuthor skeleton">
      <a className="TrackAuthor-link skeleton" href="http://"
        >Ali Bakgor</a
      >
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://">I’m Fire</a>
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton">2:22</span>
    </div>
  </div>
</div>

<div className="PlaylistItem">
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://"
          >Non Stop
          <span className="track__title-span">(Remix)</span></a
        >
      </div>
    </div>
    <div className="TrackAuthor skeleton">
      <a className="TrackAuthor-link skeleton" href="http://"
        >Стоункат, Psychopath</a
      >
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://">Non Stop</a>
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton">4:12</span>
    </div>
  </div>
</div>

<div className="PlaylistItem">
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://"
          >Run Run
          <span className="track__title-span"
            >(feat. AR/CO)</span
          ></a
        >
      </div>
    </div>
    <div className="TrackAuthor skeleton">
      <a className="TrackAuthor-link skeleton" href="http://"
        >Jaded, Will Clarke, AR/CO</a
      >
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://">Run Run</a>
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton">2:54</span>
    </div>
  </div>
</div>

<div className="PlaylistItem">
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://"
          >Eyes on Fire
          <span className="track__title-span"
            >(Zeds Dead Remix)</span
          ></a
        >
      </div>
    </div>
    <div className="TrackAuthor skeleton">
      <a className="TrackAuthor-link skeleton" href="http://"
        >Blue Foundation, Zeds Dead</a
      >
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://"
        >Eyes on Fire</a
      >
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton">5:20</span>
    </div>
  </div>
</div>

<div className="PlaylistItem">
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://"
          >Mucho Bien
          <span className="track__title-span"
            >(Hi Profile Remix)</span
          ></a
        >
      </div>
    </div>
    <div className="TrackAuthor skeleton">
      <a className="TrackAuthor-link skeleton" href="http://"
        >HYBIT, Mr. Black, Offer Nissim, Hi Profile</a
      >
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://">Mucho Bien</a>
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton">3:41</span>
    </div>
  </div>
</div>

<div className="PlaylistItem">
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://"
          >Knives n Cherries
          <span className="track__title-span"></span
        ></a>
      </div>
    </div>
    <div className="TrackAuthor skeleton">
      <a className="TrackAuthor-link skeleton" href="http://">minthaze</a>
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://"
        >Captivating</a
      >
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton">1:48</span>
    </div>
  </div>
</div>

<div className="PlaylistItem">
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://"
          >Knives n Cherries
          <span className="track__title-span"></span
        ></a>
      </div>
    </div>
    <div className="TrackAuthor skeleton">
      <a className="TrackAuthor-link skeleton" href="http://">minthaze</a>
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://"
        >Captivating</a
      >
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton">1:48</span>
    </div>
  </div>
</div>
<div className="PlaylistItem">
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://"
          >Knives n Cherries
          <span className="track__title-span"></span
        ></a>
      </div>
    </div>
    <div className="TrackAuthor skeleton">
      <a className="TrackAuthor-link skeleton" href="http://">minthaze</a>
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://"
        >Captivating</a
      >
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton">1:48</span>
    </div>
  </div>
</div>
<div className="PlaylistItem">
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://"
          >Knives n Cherries
          <span className="track__title-span"></span
        ></a>
      </div>
    </div>
    <div className="TrackAuthor skeleton">
      <a className="TrackAuthor-link skeleton" href="http://">minthaze</a>
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://"
        >Captivating</a
      >
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton">1:48</span>
    </div>
  </div>
</div>
<div className="PlaylistItem
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://"
          >Knives n Cherries
          <span className="track__title-span"></span
        ></a>
      </div>
    </div>
    <div className="TrackAuthor skeleton">
      <a className="TrackAuthor-link skeleton" href="http://">minthaze</a>
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://"
        >Captivating</a
      >
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton">1:48</span>
    </div>
  </div>
</div>
<div className="PlaylistItem">
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://"
          >Knives n Cherries
          <span className="track__title-span"></span
        ></a>
      </div>
    </div>
    <div className="TrackAuthor skeleton">
      <a className="TrackAuthor-link skeleton" href="http://">minthaze</a>
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://"
        >Captivating</a
      >
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton">1:48</span>
    </div>
  </div>
</div>
<div className="PlaylistItem">
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://"
          >Knives n Cherries
          <span className="track__title-span"></span
        ></a>
      </div>
    </div>
    <div className="TrackAuthor skeleton">
      <a className="TrackAuthor-link skeleton" href="http://">minthaze</a>
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://"
        >Captivating</a
      >
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton">1:48</span>
    </div>
  </div>
</div>

<div className="PlaylistItem">
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://"
          >How Deep Is Your Love
          <span className="track__title-span"></span
        ></a>
      </div>
    </div>
    <div className="TrackAuthor skeleton">
      <a className="TrackAuthor-link skeleton" href="http://"
        >Calvin Harris, Disciples</a
      >
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://"
        >How Deep Is Your Love</a
      >
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton">3:32</span>
    </div>
  </div>
</div>

<div className="PlaylistItem">
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://"
          >Morena <span className="track__title-span"></span
        ></a>
      </div>
    </div>
    <div className="TrackAuthor skeleton">
      <a className="TrackAuthor-link skeleton" href="http://">Tom Boxer</a>
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://"
        >Soundz Made in Romania</a
      >
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton">3:36</span>
    </div>
  </div>
</div>

<div className="PlaylistItem">
  <div className="playlist__track track">
    <div className="track__title">
      <div className="track__title-image skeleton">
        <svg className="track__title-svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track__title-text skeleton-trek">
        <a className="track__title-link skeleton-trek" href="http://">
          <span className="track__title-span"></span
        ></a>
      </div>
    </div>
    <div className="TrackAuthor">
      <a className="TrackAuthor-link skeleton" href="http://"></a>
    </div>
    <div className="TrackAlbum  skeleton">
      <a className="TrackAlbum -link skeleton" href="http://"></a>
    </div>
    <div className="track__time skeleton">
      <svg className="track__time-svg" alt="time">
        <use xlinkHref="img/icon/sprite.svg#icon-like skeleton"></use>
      </svg>
      <span className="track__time-text skeleton"></span>
    </div>
  </div>
</div>
</div>
*/