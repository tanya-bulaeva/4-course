import { formatTime } from "../../helpers.js";
import * as S from "./style.js";
export default function ProgressBar({  duration, currentTime,  handleDurationChange   }){
  return (<>
    <S.StyledProgressInput
      type="range"
      min={'0'}
      max={duration.toString()}
      value={currentTime}
      step={0.01}    
      onChange={handleDurationChange}
      $color="#B672FF;" 
         />
<S.DurationBlock>
  {formatTime(currentTime)} / {formatTime(duration)}
      </S.DurationBlock></>
  );

}
