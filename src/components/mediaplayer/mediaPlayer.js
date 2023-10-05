import { SelectedTrack } from "./selectedTrack.js";
import { useState, useRef } from "react";
import ProgressBar from "./progressBar.js";
import * as S from "./style.js"
export default function MediaPlayer({ currentTrack }){
  const [isPlaying, setPlaying] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const AudioRef = useRef(null);

  const handleStop = () => {
        AudioRef.current.pause();
       setPlaying(false); 

  };

  const handleStart = () => {
         AudioRef.current.play();
setPlaying(true);   
  };

  const handleLoop = () => {
    AudioRef.current.loop = true;
    setIsLoop(true);

  }

  const handleLoopStop = () => {
    AudioRef.current.loop = false;
    setIsLoop(false);
  }
  
  const notСonfigured = () => {
    alert ('Функция не настроена')
  }
  const togglePlay = isPlaying ? handleStop : handleStart;
  const toggleLoop = isLoop ? handleLoopStop : handleLoop ;
    return(
        <S.BarStyle>
           {currentTrack ? (<audio ref={AudioRef}  controls src={currentTrack.track_file}></audio>) : (null)}        
          <S.BarContent>
            <ProgressBar></ProgressBar>
            <S.BarPlayerBlock >
              <S.BarPlayer>

                <S.PlayerControls>
                  <S.PlayerBtnPrev>
                    <S.PlayerBtnPrevSvg  alt="prev" onClick={notСonfigured }>
                      <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                    </S.PlayerBtnPrevSvg>
                  </S.PlayerBtnPrev>
                  {isPlaying ? (                  <S.PlayerBtnPlay className="_btn" onClick={togglePlay}>
                    <S.PlayerBtnPlaySvg alt="play"  >
                    <img src = "./public/img/icon/pause.svg"></img>
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>) : ( <S.PlayerBtnPlay className="_btn" onClick={togglePlay}>
                    <S.PlayerBtnPlaySvg alt="play"  >
                      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                    </S.PlayerBtnPlaySvg>
                  </S.PlayerBtnPlay>)}

                  <S.PlayerBtnNext>
                    <S.PlayerBtnNextSvg alt="next" onClick={notСonfigured }> 
                      <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                    </S.PlayerBtnNextSvg>
                  </S.PlayerBtnNext>
                  {isLoop ? ( <S.PlayerBtnRepeat className="_btn-icon" onClick={toggleLoop}>
                    <S.PlayerBtnRepeatSvgActive alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnRepeatSvgActive>
                  </S.PlayerBtnRepeat>) : (  <S.PlayerBtnRepeat className="_btn-icon" onClick={toggleLoop}>
                    <S.PlayerBtnRepeatSvg alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerBtnRepeatSvg>
                  </S.PlayerBtnRepeat>)}

                  <S.PlayerBtnShuffle className="_btn-icon" onClick={notСonfigured }>
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