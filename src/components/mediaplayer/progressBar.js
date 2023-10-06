import { formatTime } from "../../helpers.js";
import * as S from "./style.js";

export default function ProgressBar({currentTrack, ProgressBarRef, duration, currentTime, setCurrentTime, setDuration, AudioRef, handleDurationChange   }){
 // const durationTrack = AudioRef.current.duration;
 // console.log (durationTrack)

//const duration = currentTrack.duration_in_seconds;

  return (<>
    <S.StyledProgressInput
      type="range"
      min={'0'}
      max={duration}
      value={currentTime}
      step={0.01}    
      onChange={handleDurationChange}
      $color="#B672FF;"
      ref ={ ProgressBarRef }
       
         />
<S.DurationBlock>
  {formatTime(currentTime)} / {formatTime(duration)}
      </S.DurationBlock></>
  );

}


/*{
    const ProgressBarRef = useRef ();
    const handleProgressChange = () => {
      audioRef.current.currentTime = progressBarRef.current.value;
    };
    const time = `${currentTrack.duration_in_seconds}`;
    return (<>
      <S.StyledProgressInput
        type="range"
        min={'0'}
        max={duration}
        value={time}
        step={0.01}
        onChange={handleProgressChange}
        $color="#B672FF;"
        ref ={ ProgressBarRef }
           />
<S.DurationBlock>
        < span className = "time current" >{timeProgress}</ span >
        <span>/</ span >
        < span className = "time" >{duration}</span>
        </S.DurationBlock></>
    );
  }
  */
 /* import { useState, useRef } from "react";
import * as S from "./style.js";
export default function ProgressBar({currentTrack, progressBarRef}) {
    const [currentTime, setCurrentTime] = useState(50);
    const ProgressBarRef = useRef ();
    const handleProgressChange = () => {
      console.log(progressBarRef.current.value);
    };
    const duration = `${currentTrack.duration_in_seconds}`;
    return (<>
      <S.StyledProgressInput
        type="range"
        min={'0'}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={(event) => setCurrentTime(event.target.value)}
        $color="#B672FF;"
        ref ={ ProgressBarRef }
           />
<S.DurationBlock>
        < span className = "time current" >00:00</ span >
        <span>/</ span >
        < span className = "time" >03:34</span>
        </S.DurationBlock></>
    );
  }
  */