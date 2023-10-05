import { useState } from "react";
import * as S from "./style.js";
export default function ProgressBar(currentTrack) {
    const [currentTime, setCurrentTime] = useState(10);
    const duration = `${currentTrack.duration_in_seconds}`;
  
    return (
      <S.StyledProgressInput
        type="range"
        min={'0'}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={(event) => setCurrentTime(event.target.value)}
        $color="#B672FF;"
      />
    );
  }
  