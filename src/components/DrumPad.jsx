import React from "react";

function DrumPad(props) {
  
  function playAudio() {
    const audio = document.getElementById(props.keyboard);
    audio.play();
  }
  
  return (
    <button className="drum-pad" onClick={playAudio}>
    {props.keyboard}
      <audio id={props.keyboard}  src={props.audio}></audio>
    </button>
  );
}

export default DrumPad;
