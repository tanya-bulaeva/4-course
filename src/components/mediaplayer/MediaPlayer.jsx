import { SelectedTrack } from "./SelectedTrack.jsx";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { trackSelector, isTrackPlayingSelector } from "../../store/selectors/index.js";
import { playTrack,  pauseTrack } from "../../store/actions/creators/index.js";
import ProgressBar from "./ProgressBar.jsx";
import * as S from "./style.js"

export default function MediaPlayer(){
  const dispatch = useDispatch() //Хук useDispatch   позволяет нам получить функцию dispatch, которая поможет нам отправлять действия в store.
  const isPlaying = useSelector(isTrackPlayingSelector)
  const selectedTrack = useSelector(trackSelector)
  //const [isPlaying, setPlaying] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [volume, setVolume] = useState(100);
  const [duration, setDuration] = useState(false);//duration`представляет собой общую продолжительность аудиофайла.
  const [currentTime, setCurrentTime] = useState(0);//currentTime состояния хранит текущее время воспроизведения звука
  const AudioRef = useRef(null);

  useEffect(() => {
    if (selectedTrack) {
      AudioRef.current.addEventListener('loadeddata', () => {
      handleStart();
      })
      AudioRef.current.src = selectedTrack.track_file;    
    }
  }, [selectedTrack]);//проигрывание сразу после клика на выбранный трек

const handleStop = () => {
  AudioRef.current.pause();
  dispatch(pauseTrack())
//   setPlaying(false); 
};//остановка воспроизведения трека

const handleStart = () => {
//      setPlaying(true);     
  AudioRef.current.play();
  dispatch(playTrack())
};//старт вопроизведения трека

const togglePlay = isPlaying ? handleStop : handleStart;

useEffect(() => {
    if (AudioRef) {
      AudioRef.current.volume = volume / 100;
    }
  }, [volume, AudioRef]);//настройка ползунка громкости  
  
  const onLoadedMetadata = () => {
    setDuration(AudioRef.current.duration);
  };
  const onTimeUpdate = () => {
    setCurrentTime(AudioRef.current.currentTime);
  };


const handleDurationChange = (e) => {
  setCurrentTime(e.target.value);
  AudioRef.current.currentTime = e.target.value
}//изменение ползунка прокрутки

useEffect(() => {
  if (selectedTrack.duration_in_seconds){
    setDuration(AudioRef.current.duration)
}})

 
  const handleLoop = () => {
    AudioRef.current.loop = true;
    setIsLoop(true);
  }//зацикливание трека начать

  const handleLoopStop = () => {
    AudioRef.current.loop = false;
    setIsLoop(false);
  }//зацикливание трека закончить
  
  const notСonfigured = () => {
    alert ('Функция не настроена')
  }


  const toggleLoop = isLoop ? handleLoopStop : handleLoop ;

//
    return(<> 
 <S.BarStyle>
        {selectedTrack ? (<audio   style={{ display: 'none' }} ref={AudioRef}   controls src={selectedTrack.track_file}  onLoadedMetadata ={onLoadedMetadata} onTimeUpdate  ={onTimeUpdate } ></audio>) : (null)}        
       <S.BarContent>
         <ProgressBar  handleDurationChange ={handleDurationChange }  duration = {duration} currentTime = {currentTime}  ></ProgressBar>
         <S.BarPlayerBlock >
           <S.BarPlayer>

             <S.PlayerControls>
               <S.PlayerBtnPrev>
                 <S.PlayerBtnPrevSvg  alt="prev" onClick={notСonfigured }>
                   <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                 </S.PlayerBtnPrevSvg>
               </S.PlayerBtnPrev>
               <S.PlayerBtnPlay className="_btn" onClick={togglePlay}>
                 <S.PlayerBtnPlaySvg alt="play"  >
                   {isPlaying ? (<use xlinkHref="img/icon/sprite.svg#icon-pause"></use>) : (<use xlinkHref="img/icon/sprite.svg#icon-play"></use>)}
                   
                 </S.PlayerBtnPlaySvg>
               </S.PlayerBtnPlay>

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
                   name="range"
                   min={0}
                   max={100}
                   value={volume}
                   onChange={(e) => setVolume(e.target.value)}/>
               </S.VolumeProgress>
             </S.VolumeContent>
           </S.BarVolumeBlock>
         </S.BarPlayerBlock>
       </S.BarContent>
     </S.BarStyle> 
       
   </> )
}