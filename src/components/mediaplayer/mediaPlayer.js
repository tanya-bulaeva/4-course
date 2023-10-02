import { SelectedTrack } from "./selectedTrack.js"
import * as S from "./style.js"
export default function MediaPlayer({ currentTrack }){


    return(
        <S.BarStyle>
           {currentTrack ? (<audio controls src={currentTrack.track_file}></audio>) : (null)}        
          <S.BarContent>
            <S.BarPlayerProgress></S.BarPlayerProgress>
            <S.BarPlayerBlock >
              <S.BarPlayer>

                <S.PlayerControls>
                  <S.PlayerBtnPrev>
                    <S.PlayerBtnPrevSvg  alt="prev">
                      <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                    </S.PlayerBtnPrevSvg>
                  </S.PlayerBtnPrev>
                  <S.PlayerBtnPlay className="_btn">
                    <S.PlayerBtnPlaySvg alt="play">
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>
                  <S.PlayerBtnNext>
                    <S.PlayerBtnNextSvg alt="next">
                      <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                    </S.PlayerBtnNextSvg>
                  </S.PlayerBtnNext>
                  <S.PlayerBtnRepeat className="_btn-icon">
                    <S.PlayerBtnRepeatSvg alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnRepeatSvg>
                  </S.PlayerBtnRepeat>
                  <S.PlayerBtnShuffle className="_btn-icon">
                    <S.PlayerBtnShuffleSvg alt="shuffle">
                      <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                    </S.PlayerBtnShuffleSvg>
                  </S.PlayerBtnShuffle>

                </S.PlayerControls>

<SelectedTrack  currentTrack={currentTrack} />

              </S.BarPlayer>
              <S.BarVolumeBlock>
                <S.VolumeContent>
                  <S.VolumeImage>
                    <S.VolumeSvg alt="volume">
                      <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                    </S.VolumeSvg>
                  </S.VolumeImage>
                  <S.VolumeProgress className="_btn">
                    <S.VolumeProgressLine
                      className=" _btn"
                      type="range"
                      name="range"/>
                  </S.VolumeProgress>
                </S.VolumeContent>
              </S.BarVolumeBlock>
            </S.BarPlayerBlock>
          </S.BarContent>
        </S.BarStyle>
    )
}